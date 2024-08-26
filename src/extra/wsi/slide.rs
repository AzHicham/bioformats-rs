use crate::{
    bindings::reader::FormatReader,
    extra::{
        models::{Address, PixelType, Region, Size},
        utils::{
            planar_to_interleaved_rgb, planar_to_interleaved_rgba, preserve_aspect_ratio,
            resize_image, vec_i8_into_u8,
        },
        wsi::error::BioformatsWSIError,
    },
};
use image::{DynamicImage, RgbImage, RgbaImage};

pub struct BioformatsSlide<T: FormatReader> {
    reader: T,
    level_dimensions: Vec<Size>,
    level_downsamples: Vec<f64>,
    is_interleaved: bool,
    channel_count: u32,
    pixel_type: PixelType,
}

impl<T: FormatReader> BioformatsSlide<T> {
    /// This method tries to open the slide at the given filename location.
    ///
    /// This function can be expensive; avoid calling it unnecessarily. For example, a tile server
    /// should not create a new object on every tile request. Instead, it should maintain a cache
    /// of `BioformatsSlide` objects and reuse them when possible.
    pub fn new<F: AsRef<str>>(reader: T, filename: F) -> Result<Self, BioformatsWSIError> {
        reader.set_flattened_resolutions(false)?;
        reader.set_id(filename)?;
        reader.set_series(0)?;
        reader.set_resolution(0)?;
        let level_dimensions = compute_all_level_dimensions(&reader)?;
        let level_downsamples = compute_all_level_downsamples(&level_dimensions);
        let is_interleaved = reader.is_interleaved()?;
        let channel_count = reader.get_size_c()?.try_into()?;
        let pixel_type = match reader.get_pixel_type()? {
            0 => PixelType::I8,
            1 => PixelType::U8,
            2 => PixelType::I16,
            3 => PixelType::U16,
            4 => PixelType::I32,
            5 => PixelType::U32,
            6 => PixelType::F32,
            7 => PixelType::F64,
            i => return Err(BioformatsWSIError::InvalidPixelType(i)),
        };
        Ok(Self {
            reader,
            level_dimensions,
            level_downsamples,
            is_interleaved,
            channel_count,
            pixel_type,
        })
    }

    /// Get the number of levels in the whole slide image.
    pub fn get_level_count(&self) -> u32 {
        self.level_dimensions.len() as u32
    }

    /// Get the dimensions of a single level.
    ///
    /// This method returns the Size { width, height } number of pixels of the whole slide image at the
    /// specified level. Returns an error if the level is invalid
    pub fn get_level_dimensions(&self, level: u32) -> Result<Size, BioformatsWSIError> {
        self.level_dimensions
            .get(level as usize)
            .copied()
            .ok_or(BioformatsWSIError::InvalidLevel(level))
    }

    /// Get dimensions of all available levels
    pub fn get_all_level_dimensions(&self) -> &[Size] {
        &self.level_dimensions
    }

    /// Get the downsampling factor of a given level.
    ///
    /// This method returns the downsample (f64) at the specified level.
    /// Returns an error if the level is invalid
    pub fn get_level_downsample(&self, level: u32) -> Result<f64, BioformatsWSIError> {
        self.level_downsamples
            .get(level as usize)
            .copied()
            .ok_or(BioformatsWSIError::InvalidLevel(level))
    }

    /// Get all downsampling factors for all available levels.
    pub fn get_all_level_downsample(&self) -> &[f64] {
        &self.level_downsamples
    }

    /// Get the best level to use for the given downsample factor.
    pub fn get_best_level_for_downsample(&self, downsample: f64) -> u32 {
        self.level_downsamples
            .iter()
            .enumerate()
            .rfind(|(_, &ds)| ds <= downsample)
            .map_or(0, |(index, _)| index) as u32
    }

    /// Get the number of channel per image.
    pub fn get_channel_count(&self) -> u32 {
        self.channel_count
    }

    /// Get the type of pixel data in this slide.
    pub fn pixel_type(&self) -> PixelType {
        self.pixel_type
    }

    /// Copy pixel data from a whole slide image.
    ///
    /// This function reads and decompresses a region of a whole slide image into a Vec
    ///
    /// Args:
    ///     offset: (x, y) coordinate (increasing downwards/to the right) of top left pixel position
    ///     level: At which level to grab the region from
    ///     size: (width, height) in pixels of the outputted region
    ///
    /// Size of output Vec is Width * Height * N pixels (N = 3 for RGB or 4 RGBA)
    pub fn read_region(&self, region: &Region) -> Result<Vec<i8>, BioformatsWSIError> {
        self.reader.set_resolution(region.level.try_into()?)?;
        // Check Region validity according to current resolution
        let level_dimensions = self.get_level_dimensions(region.level)?;
        if region.address.x + region.size.w > level_dimensions.w
            || region.address.y + region.size.h > level_dimensions.h
        {
            return Err(BioformatsWSIError::OutOfBoundRegion(*region));
        }

        let index = self.reader.get_index(0, 0, 0)?;
        Ok(self.reader.open_bytes(
            index,
            region.address.x.try_into()?,
            region.address.y.try_into()?,
            region.size.w.try_into()?,
            region.size.h.try_into()?,
        )?)
    }

    /// Copy pixel data from a whole slide image.
    ///
    /// This function reads and decompresses a region of a whole slide image into a `DynamicImage`
    ///
    /// Args:
    ///     offset: (x, y) coordinate (increasing downwards/to the right) of top left pixel position
    ///     level: At which level to grab the region from
    ///     size: (width, height) in pixels of the outputted region
    pub fn read_image(&self, region: &Region) -> Result<DynamicImage, BioformatsWSIError> {
        match (self.pixel_type, self.channel_count) {
            (PixelType::U8, 3) => self.read_rgb8_image(region),
            (PixelType::U8, 4) => self.read_rgba8_image(region),
            (p, c) => Err(BioformatsWSIError::UnsupportedImageType {
                channel_count: c,
                pixel_type: p,
            }),
        }
    }

    // Get an image thumbnail of desired size of the whole slide image.
    /// Args:
    ///     size: (width, height) in pixels of the thumbnail
    pub fn thumbnail(&self, size: &Size) -> Result<DynamicImage, BioformatsWSIError> {
        let dimension_level0 = self.get_level_dimensions(0)?;
        let downsample = (
            f64::from(dimension_level0.w) / f64::from(size.w),
            f64::from(dimension_level0.h) / f64::from(size.h),
        );
        let downsample = f64::max(downsample.0, downsample.1);
        let level = self.get_best_level_for_downsample(downsample);
        let region = Region {
            size: self.get_level_dimensions(level)?,
            level,
            address: Address { x: 0, y: 0 },
        };
        let image = self.read_image(&region)?;
        let size = preserve_aspect_ratio(size, &dimension_level0);
        Ok(resize_image(image, &size)?)
    }

    fn read_rgb8_image(&self, region: &Region) -> Result<DynamicImage, BioformatsWSIError> {
        let buffer = self.read_region(region)?;
        let size = region.size;
        let image = RgbImage::from_vec(size.w, size.h, vec_i8_into_u8(buffer)).unwrap(); // Should be safe because buffer is big enough
        if self.is_interleaved {
            Ok(DynamicImage::ImageRgb8(image))
        } else {
            Ok(DynamicImage::ImageRgb8(planar_to_interleaved_rgb(image)))
        }
    }

    fn read_rgba8_image(&self, region: &Region) -> Result<DynamicImage, BioformatsWSIError> {
        let buffer = self.read_region(region)?;
        let size = region.size;
        let image = RgbaImage::from_vec(size.w, size.h, vec_i8_into_u8(buffer)).unwrap(); // Should be safe because buffer is big enough
        if self.is_interleaved {
            Ok(DynamicImage::ImageRgba8(image))
        } else {
            Ok(DynamicImage::ImageRgba8(planar_to_interleaved_rgba(image)))
        }
    }
}

fn compute_all_level_dimensions<T: FormatReader>(
    reader: &T,
) -> Result<Vec<Size>, BioformatsWSIError> {
    let nb_levels = reader.get_resolution_count()?;
    let mut res = Vec::with_capacity(nb_levels as usize);
    for level in 0..nb_levels {
        reader.set_resolution(level)?;
        let w = reader.get_size_x()?.try_into()?;
        let h = reader.get_size_y()?.try_into()?;
        res.push(Size { w, h });
    }
    Ok(res)
}

fn compute_all_level_downsamples(level_dimensions: &[Size]) -> Vec<f64> {
    let nb_level = level_dimensions.len();
    let dim_0 = level_dimensions.first().expect("");
    let mut downsamples = Vec::with_capacity(nb_level);
    for level in 0..nb_level {
        let dim = level_dimensions.get(level).expect("");
        downsamples.push(
            (f64::from(dim_0.w) / f64::from(dim.w)).min(f64::from(dim_0.h) / f64::from(dim.h)),
        );
    }
    downsamples
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::fixture::{cmu_1_svs, image_reader};
    use rstest::rstest;

    #[rstest]
    fn test_new(image_reader: impl FormatReader, cmu_1_svs: &str) {
        BioformatsSlide::new(image_reader, cmu_1_svs).expect("Failed to create BioformatsSlide");
    }

    #[rstest]
    fn test_level_count(image_reader: impl FormatReader, cmu_1_svs: &str) {
        let wsi = BioformatsSlide::new(image_reader, cmu_1_svs)
            .expect("Failed to create BioformatsSlide");
        assert_eq!(wsi.get_level_count(), 3);
    }

    #[rstest]
    fn test_level_dimensions(image_reader: impl FormatReader, cmu_1_svs: &str) {
        let wsi = BioformatsSlide::new(image_reader, cmu_1_svs)
            .expect("Failed to create BioformatsSlide");
        assert_eq!(
            wsi.get_level_dimensions(0).unwrap(),
            Size { w: 46000, h: 32914 }
        );
        assert_eq!(
            wsi.get_level_dimensions(1).unwrap(),
            Size { w: 11500, h: 8228 }
        );
        assert_eq!(
            wsi.get_level_dimensions(2).unwrap(),
            Size { w: 2875, h: 2057 }
        );
        assert!(wsi.get_level_dimensions(3).is_err());
    }

    #[rstest]
    fn test_all_level_dimensions(image_reader: impl FormatReader, cmu_1_svs: &str) {
        let wsi = BioformatsSlide::new(image_reader, cmu_1_svs)
            .expect("Failed to create BioformatsSlide");
        assert_eq!(
            wsi.get_all_level_dimensions(),
            vec![
                Size { w: 46000, h: 32914 },
                Size { w: 11500, h: 8228 },
                Size { w: 2875, h: 2057 }
            ]
        );
    }

    #[rstest]
    fn test_level_downsample(image_reader: impl FormatReader, cmu_1_svs: &str) {
        let wsi = BioformatsSlide::new(image_reader, cmu_1_svs)
            .expect("Failed to create BioformatsSlide");
        assert_eq!(wsi.get_level_downsample(0).unwrap(), 1_f64);
        assert_eq!(wsi.get_level_downsample(1).unwrap(), 4_f64);
        assert_eq!(wsi.get_level_downsample(2).unwrap(), 16_f64);
        assert!(wsi.get_level_downsample(3).is_err());
    }

    #[rstest]
    fn test_all_level_downsample(image_reader: impl FormatReader, cmu_1_svs: &str) {
        let wsi = BioformatsSlide::new(image_reader, cmu_1_svs)
            .expect("Failed to create BioformatsSlide");
        let res = wsi.get_all_level_downsample();
        for (r, reference) in res.iter().zip(vec![1_f64, 4., 16.]) {
            assert!(r.eq(&reference));
        }
    }

    #[rstest]
    fn test_best_level_for_downsample(image_reader: impl FormatReader, cmu_1_svs: &str) {
        let wsi = BioformatsSlide::new(image_reader, cmu_1_svs)
            .expect("Failed to create BioformatsSlide");
        assert_eq!(wsi.get_best_level_for_downsample(0.9), 0);
        assert_eq!(wsi.get_best_level_for_downsample(1.0), 0);
        assert_eq!(wsi.get_best_level_for_downsample(1.1), 0);
        assert_eq!(wsi.get_best_level_for_downsample(3.99), 0);

        assert_eq!(wsi.get_best_level_for_downsample(4.0), 1);
        assert_eq!(wsi.get_best_level_for_downsample(4.1), 1);

        assert_eq!(wsi.get_best_level_for_downsample(16.0), 2);
        assert_eq!(wsi.get_best_level_for_downsample(16.1), 2);
    }

    #[rstest]
    fn test_get_channel_count(image_reader: impl FormatReader, cmu_1_svs: &str) {
        let wsi = BioformatsSlide::new(image_reader, cmu_1_svs)
            .expect("Failed to create BioformatsSlide");
        assert_eq!(wsi.get_channel_count(), 3);
    }

    #[rstest]
    fn test_get_pixel_type(image_reader: impl FormatReader, cmu_1_svs: &str) {
        let wsi = BioformatsSlide::new(image_reader, cmu_1_svs)
            .expect("Failed to create BioformatsSlide");
        assert_eq!(wsi.pixel_type(), PixelType::U8);
    }

    #[rstest]
    fn test_read_image_ok(image_reader: impl FormatReader, cmu_1_svs: &str) {
        let wsi = BioformatsSlide::new(image_reader, cmu_1_svs)
            .expect("Failed to create BioformatsSlide");
        let image = wsi
            .read_image(&Region {
                size: Size { w: 224, h: 324 },
                level: 0,
                address: Address { x: 0, y: 0 },
            })
            .expect("Cannot read image");
        assert_eq!(image.height(), 324);
        assert_eq!(image.width(), 224);
    }

    #[rstest]
    fn test_read_image_ko(image_reader: impl FormatReader, cmu_1_svs: &str) {
        let wsi = BioformatsSlide::new(image_reader, cmu_1_svs)
            .expect("Failed to create BioformatsSlide");
        let level = 2;
        let dim3 = wsi.get_level_dimensions(level).unwrap();
        let res = wsi.read_image(&Region {
            size: Size {
                w: dim3.w + 1,
                h: dim3.h,
            },
            level,
            address: Address { x: 0, y: 0 },
        });
        assert!(matches!(res, Err(BioformatsWSIError::OutOfBoundRegion(_))));
    }

    #[rstest]
    fn test_read_thumbnail(image_reader: impl FormatReader, cmu_1_svs: &str) {
        let wsi = BioformatsSlide::new(image_reader, cmu_1_svs)
            .expect("Failed to create BioformatsSlide");
        let image = wsi
            .thumbnail(&Size { w: 512, h: 512 })
            .expect("cannot read thumbnail");
        // Aspect ratio is preserved for thumbnail call
        assert_eq!(image.height(), 366);
        assert_eq!(image.width(), 512);
    }
}
