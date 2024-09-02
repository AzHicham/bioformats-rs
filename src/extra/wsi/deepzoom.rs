use crate::{
    bindings::reader::FormatReader,
    extra::{
        models::{Address, Region, Size},
        utils::resize_image,
        wsi::{BioformatsSlide, WSIError},
    },
};
use derivative::Derivative;
use image::DynamicImage;
use std::borrow::Borrow;

#[derive(Derivative)]
#[derivative(Debug)]
pub struct DeepZoomGenerator<I: FormatReader, B: Borrow<BioformatsSlide<I>>> {
    #[derivative(Debug = "ignore")]
    slide: B,
    #[derivative(Debug = "ignore")]
    _phantom: std::marker::PhantomData<I>,

    level_count: usize,
    level_tiles: Vec<Size>,
    level_dimensions: Vec<Size>,
    tile_size: u32,
    l0_offset: Address,
    slide_level_dimensions: Vec<Size>,
    slide_from_dz_level: Vec<u32>,
    l0_l_downsamples: Vec<f64>,
    l_z_downsamples: Vec<f64>,
}

impl<I: FormatReader, B: Borrow<BioformatsSlide<I>>> DeepZoomGenerator<I, B> {
    pub fn new(slide: B, tile_size: u32) -> Result<Self, WSIError> {
        let slide_ref = slide.borrow();

        let l0_offset = Address { x: 0, y: 0 };
        let slide_level_dimensions = slide_ref.get_all_level_dimensions().to_vec();
        let slide_level0_dimensions = slide_ref.get_level_dimensions(0)?;
        let downsamples = slide_ref.get_all_level_downsample().to_vec();

        // Deep Zoom levels
        let level_dimensions = {
            let mut z_size = Size {
                w: slide_level0_dimensions.w,
                h: slide_level0_dimensions.h,
            };
            let mut level_dimensions = vec![z_size];

            while z_size.w > 1 || z_size.h > 1 {
                z_size.w = ((z_size.w as f32 / 2.0).ceil() as u32).max(1) as _;
                z_size.h = ((z_size.h as f32 / 2.0).ceil() as u32).max(1) as _;
                level_dimensions.push(z_size);
            }
            level_dimensions.reverse();
            level_dimensions
        };

        // Tile
        let level_tiles: Vec<Size> = level_dimensions
            .iter()
            .map(|Size { w, h }| Size {
                w: (*w as f32 / tile_size as f32).ceil() as _,
                h: (*h as f32 / tile_size as f32).ceil() as _,
            })
            .collect();

        // Deep Zoom level count
        let level_count = level_dimensions.len();

        // Total downsamples for each Deep Zoom level
        let l0_z_downsamples: Vec<f64> = (0..level_count)
            .map(|level| 2_u64.pow((level_count - level - 1) as _) as f64)
            .collect();

        // Preferred slide levels for each Deep Zoom level
        let slide_from_dz_level = {
            let mut slide_from_dz_level = Vec::with_capacity(l0_z_downsamples.len());
            for ds in &l0_z_downsamples {
                let best_level_for_downsample = downsamples
                    .iter()
                    .enumerate()
                    .rfind(|(_, &downsample)| downsample <= *ds)
                    .map_or(0, |(index, _)| index);
                slide_from_dz_level.push(best_level_for_downsample as u32);
            }
            slide_from_dz_level
        };

        // Piecewise downsamples
        let l0_l_downsamples = downsamples;

        let l_z_downsamples: Vec<f64> = (0..level_count)
            .map(|dz_level| {
                l0_z_downsamples[dz_level]
                    / l0_l_downsamples[slide_from_dz_level[dz_level] as usize]
            })
            .collect();

        Ok(DeepZoomGenerator {
            slide,
            _phantom: std::marker::PhantomData,
            tile_size,
            l0_offset,
            level_dimensions,
            slide_level_dimensions: slide_level_dimensions.clone(),
            level_tiles,
            level_count,
            slide_from_dz_level,
            l0_l_downsamples,
            l_z_downsamples,
        })
    }

    pub fn level_count(&self) -> usize {
        self.level_count
    }

    pub fn level_tiles(&self) -> &[Size] {
        &self.level_tiles
    }

    pub fn level_dimensions(&self) -> &[Size] {
        &self.level_dimensions
    }

    pub fn tile_count(&self) -> u32 {
        self.level_tiles.iter().map(|&size| size.w * size.h).sum()
    }

    pub fn get_tile_info(&self, level: u32, address: Address) -> Result<(Region, Size), WSIError> {
        if level as usize >= self.level_count {
            return Err(WSIError::InvalidLevel(level));
        }
        if address.x >= self.level_tiles[level as usize].w
            || address.y >= self.level_tiles[level as usize].h
        {
            return Err(WSIError::InvalidAddress(address));
        }

        let level_dimensions = self.level_dimensions[level as usize];

        // Get preferred slide level
        let slide_level = self.slide_from_dz_level[level as usize];
        let slide_level_dimensions = self.slide_level_dimensions[slide_level as usize];

        // Calculate top/left and bottom/right overlap
        let z_overlap_topleft = Address { x: 0, y: 0 };

        // Calculate top/left and bottom/right overlap
        let z_overlap_bottomright = Address { x: 0, y: 0 };

        // Get final size of the tile
        let z_size = Size {
            w: self
                .tile_size
                .min(level_dimensions.w - self.tile_size * address.x)
                + z_overlap_topleft.x
                + z_overlap_bottomright.x,
            h: self
                .tile_size
                .min(level_dimensions.h - self.tile_size * address.y)
                + z_overlap_topleft.y
                + z_overlap_bottomright.y,
        };

        // Obtain the region coordinates
        let z_location = Address {
            x: address.x * self.tile_size,
            y: address.y * self.tile_size,
        };

        let l_location = (
            self.l_z_downsamples[level as usize] * f64::from(z_location.x - z_overlap_topleft.x),
            self.l_z_downsamples[level as usize] * f64::from(z_location.y - z_overlap_topleft.y),
        );

        // Round location down and size up, and add offset of active area
        let l0_location = Address {
            x: l_location.0.ceil() as _,
            y: l_location.1.ceil() as _,
        };

        let l_size = Size {
            w: (slide_level_dimensions.w - l_location.0.ceil() as u32)
                .min((self.l_z_downsamples[level as usize] * f64::from(z_size.w)).ceil() as _),
            h: (slide_level_dimensions.h - l_location.1.ceil() as u32)
                .min((self.l_z_downsamples[level as usize] * f64::from(z_size.h)).ceil() as _),
        };

        let region = Region {
            address: l0_location,
            level: slide_level,
            size: l_size,
        };

        Ok((region, z_size))
    }

    pub fn get_tile_image(&self, level: u32, location: Address) -> Result<DynamicImage, WSIError> {
        let (region, final_size) = self.get_tile_info(level, location)?;
        let image = self.slide.borrow().read_image(&region)?;

        let size = Size {
            w: image.width(),
            h: image.height(),
        };

        if final_size != size {
            Ok(resize_image(image, &final_size)?)
        } else {
            Ok(image)
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::fixture::{cmu_1_svs, image_reader};
    use rstest::{fixture, rstest};

    #[fixture]
    fn slide(
        image_reader: impl FormatReader,
        cmu_1_svs: &str,
    ) -> BioformatsSlide<impl FormatReader> {
        BioformatsSlide::new(image_reader, cmu_1_svs).expect("Failed to create BioformatsSlide")
    }

    #[rstest]
    fn test_new(slide: BioformatsSlide<impl FormatReader>) {
        DeepZoomGenerator::new(slide, 224).expect("Cannot create DeepZoomGenerator");
    }

    #[rstest]
    fn test_level_count(slide: BioformatsSlide<impl FormatReader>) {
        let dz = DeepZoomGenerator::new(slide, 224).expect("Cannot create DeepZoomGenerator");
        assert_eq!(dz.level_count(), 17);
    }

    #[rstest]
    fn test_level_tiles(slide: BioformatsSlide<impl FormatReader>) {
        let dz = DeepZoomGenerator::new(slide, 224).expect("Cannot create DeepZoomGenerator");
        assert_eq!(
            dz.level_tiles(),
            vec![
                Size { w: 1, h: 1 },
                Size { w: 1, h: 1 },
                Size { w: 1, h: 1 },
                Size { w: 1, h: 1 },
                Size { w: 1, h: 1 },
                Size { w: 1, h: 1 },
                Size { w: 1, h: 1 },
                Size { w: 1, h: 1 },
                Size { w: 1, h: 1 },
                Size { w: 2, h: 2 },
                Size { w: 4, h: 3 },
                Size { w: 7, h: 5 },
                Size { w: 13, h: 10 },
                Size { w: 26, h: 19 },
                Size { w: 52, h: 37 },
                Size { w: 103, h: 74 },
                Size { w: 206, h: 147 },
            ]
        );
    }

    #[rstest]
    fn test_level_dimensions(slide: BioformatsSlide<impl FormatReader>) {
        let dz = DeepZoomGenerator::new(slide, 224).expect("Cannot create DeepZoomGenerator");
        assert_eq!(
            dz.level_dimensions(),
            vec![
                Size { w: 1, h: 1 },
                Size { w: 2, h: 2 },
                Size { w: 3, h: 3 },
                Size { w: 6, h: 5 },
                Size { w: 12, h: 9 },
                Size { w: 23, h: 17 },
                Size { w: 45, h: 33 },
                Size { w: 90, h: 65 },
                Size { w: 180, h: 129 },
                Size { w: 360, h: 258 },
                Size { w: 719, h: 515 },
                Size { w: 1438, h: 1029 },
                Size { w: 2875, h: 2058 },
                Size { w: 5750, h: 4115 },
                Size { w: 11500, h: 8229 },
                Size { w: 23000, h: 16457 },
                Size { w: 46000, h: 32914 },
            ]
        );
    }

    #[rstest]
    fn test_tile_count(slide: BioformatsSlide<impl FormatReader>) {
        let dz = DeepZoomGenerator::new(slide, 224).expect("Cannot create DeepZoomGenerator");
        assert_eq!(dz.tile_count(), 40512);
    }

    #[rstest]
    #[case(0, Address {x: 0, y: 0}, Region {size: Size {w: 2875, h: 2057}, level: 2, address: Address {x: 0, y: 0} }, Size {w: 1, h: 1})]
    #[case(1, Address {x: 0, y: 0}, Region {size: Size {w: 2875, h: 2057}, level: 2, address: Address {x: 0, y: 0} }, Size {w: 2, h: 2})]
    #[case(10, Address {x: 0, y: 0}, Region {size: Size {w: 896, h: 896}, level: 2, address: Address {x: 0, y: 0} }, Size {w: 224, h: 224})]
    #[case(11, Address {x: 0, y: 0}, Region {size: Size {w: 448, h: 448}, level: 2, address: Address {x: 0, y: 0} }, Size {w: 224, h: 224})]
    #[case(12, Address {x: 0, y: 0}, Region {size: Size {w: 224, h: 224}, level: 2, address: Address {x: 0, y: 0} }, Size {w: 224, h: 224})]
    #[case(10, Address {x: 2, y: 1}, Region {size: Size {w: 896, h: 896}, level: 2, address: Address {x: 2 * 896, y: 896} }, Size {w: 224, h: 224})]
    #[case(11, Address {x: 5, y: 4}, Region {size: Size {w: 448, h: 265}, level: 2, address: Address {x: 5 * 448, y: 4 * 448} }, Size {w: 224, h: 133})]
    #[case(12, Address {x: 10, y: 9}, Region {size: Size {w: 224, h: 41}, level: 2, address: Address {x: 10 * 224, y: 9 * 224} }, Size {w: 224, h: 42})]
    fn test_get_tile_info(
        slide: BioformatsSlide<impl FormatReader>,
        #[case] level: u32,
        #[case] address: Address,
        #[case] region_out: Region,
        #[case] size_out: Size,
    ) {
        let dz = DeepZoomGenerator::new(slide, 224).expect("Cannot create DeepZoomGenerator");
        let res = dz
            .get_tile_info(level, address)
            .expect("Cannot compute tile_info");
        assert_eq!(res.0, region_out);
        assert_eq!(res.1, size_out);
    }

    #[rstest]
    #[case(0, Address {x: 1, y: 0})]
    #[case(1, Address {x: 0, y: 2})]
    #[case(16, Address {x: 46000, y: 0})]
    #[case(16, Address {x: 0, y: 32914})]
    fn test_get_tile_info_ko(
        slide: BioformatsSlide<impl FormatReader>,
        #[case] level: u32,
        #[case] address: Address,
    ) {
        let dz = DeepZoomGenerator::new(slide, 224).expect("Cannot create DeepZoomGenerator");
        let res = dz.get_tile_info(level, address);
        assert!(res.is_err());
    }

    #[rstest]
    #[case(0, Address {x: 0, y: 0}, Size {w: 1, h: 1})]
    #[case(1, Address {x: 0, y: 0}, Size {w: 2, h: 2})]
    #[case(10, Address {x: 0, y: 0}, Size {w: 224, h: 224})]
    #[case(11, Address {x: 0, y: 0}, Size {w: 224, h: 224})]
    #[case(12, Address {x: 0, y: 0}, Size {w: 224, h: 224})]
    #[case(10, Address {x: 1, y: 0}, Size {w: 224, h: 224})]
    #[case(11, Address {x: 5, y: 4}, Size {w: 224, h: 133})]
    #[case(12, Address {x: 10, y: 9}, Size {w: 224, h: 42})]
    fn test_get_tile_image(
        slide: BioformatsSlide<impl FormatReader>,
        #[case] level: u32,
        #[case] address: Address,
        #[case] size_out: Size,
    ) {
        let dz = DeepZoomGenerator::new(slide, 224).expect("Cannot create DeepZoomGenerator");
        let res = dz
            .get_tile_image(level, address)
            .expect("Cannot compute tile_info");
        assert_eq!(res.width(), size_out.w);
        assert_eq!(res.height(), size_out.h);
    }
}
