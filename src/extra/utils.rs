use crate::extra::models::Size;
use fast_image_resize as fr;
use fast_image_resize::{images::Image, ImageError, ResizeError};
use image::{DynamicImage, RgbImage, RgbaImage};
use std::cmp;

pub(crate) fn preserve_aspect_ratio(size: &Size, dimension: &Size) -> Size {
    // Code adapted from https://pillow.readthedocs.io/en/latest/_modules/PIL/Image.html#Image.thumbnail
    fn round_aspect<F: FnMut(f32) -> f32>(number: f32, mut key: F) -> u32 {
        cmp::max(
            cmp::min_by_key(number.floor() as u32, number.ceil() as u32, |n| {
                key(*n as f32).round() as u32
            }),
            1,
        )
    }
    let w = size.w as f32;
    let h = size.h as f32;
    let aspect: f32 = dimension.w as f32 / dimension.h as f32;
    if { w / h } >= aspect {
        Size {
            w: round_aspect(h * aspect, |n| (aspect - n / h).abs()),
            h: h as u32,
        }
    } else {
        Size {
            w: w as u32,
            h: round_aspect(w / aspect, |n| {
                if n == 0. {
                    0.
                } else {
                    (aspect - w / n).abs()
                }
            }),
        }
    }
}

pub(crate) fn resize_image(
    image: DynamicImage,
    new_size: &Size,
) -> Result<DynamicImage, ResizeError> {
    match image {
        DynamicImage::ImageRgb8(image) => {
            Ok(DynamicImage::ImageRgb8(resize_rgb_image(image, new_size)?))
        }
        DynamicImage::ImageRgba8(image) => Ok(DynamicImage::ImageRgba8(resize_rgba_image(
            image, new_size,
        )?)),
        _ => Err(ResizeError::ImageError(ImageError::UnsupportedPixelType)),
    }
}

fn resize_rgb_image(image: RgbImage, new_size: &Size) -> Result<RgbImage, ResizeError> {
    let src_image = Image::from_vec_u8(
        image.width(),
        image.height(),
        image.into_raw(),
        fr::PixelType::U8x3,
    )
    .expect("Cannot convert RgbImage to Image");

    let mut dst_image = Image::new(new_size.w, new_size.h, fr::PixelType::U8x3);
    let mut resizer = fr::Resizer::new();
    let option = fr::ResizeOptions {
        algorithm: fr::ResizeAlg::Convolution(fr::FilterType::Lanczos3),
        cropping: fr::SrcCropping::None,
        mul_div_alpha: false,
    };

    resizer.resize(&src_image, &mut dst_image, &option)?;

    let image = RgbImage::from_vec(new_size.w, new_size.h, dst_image.into_vec()).unwrap(); // safe because dst_image buffer is big enough

    Ok(image)
}

fn resize_rgba_image(image: RgbaImage, new_size: &Size) -> Result<RgbaImage, ResizeError> {
    let src_image = Image::from_vec_u8(
        image.width(),
        image.height(),
        image.into_raw(),
        fr::PixelType::U8x4,
    )
    .expect("Cannot convert RgbImage to Image");

    let mut dst_image = Image::new(new_size.w, new_size.h, fr::PixelType::U8x4);
    let mut resizer = fr::Resizer::new();
    let option = fr::ResizeOptions {
        algorithm: fr::ResizeAlg::Convolution(fr::FilterType::Lanczos3),
        cropping: fr::SrcCropping::None,
        mul_div_alpha: false,
    };

    resizer.resize(&src_image, &mut dst_image, &option)?;

    let image = RgbaImage::from_vec(new_size.w, new_size.h, dst_image.into_vec()).unwrap(); // safe because dst_image buffer is big enough

    Ok(image)
}

// https://stackoverflow.com/questions/59707349/cast-vector-of-i8-to-vector-of-u8-in-rust
pub(crate) fn vec_i8_into_u8(v: Vec<i8>) -> Vec<u8> {
    // ideally we'd use Vec::into_raw_parts, but it's unstable,
    // so we have to do it manually:

    // first, make sure v's destructor doesn't free the data
    // it thinks it owns when it goes out of scope
    let mut v = std::mem::ManuallyDrop::new(v);

    // then, pick apart the existing Vec
    let p = v.as_mut_ptr();
    let len = v.len();
    let cap = v.capacity();

    // finally, adopt the data into a new Vec
    unsafe { Vec::from_raw_parts(p.cast::<u8>(), len, cap) }
}

pub(crate) fn planar_to_interleaved_rgb(image: RgbImage) -> RgbImage {
    let w = image.width() as usize;
    let h = image.height() as usize;
    let mut inter_image = RgbImage::new(image.width(), image.height());
    let size = image.width() * image.height();
    for i in 0..size as usize {
        inter_image.as_mut()[i * 3] = image.as_ref()[i + 0 * w * h];
        inter_image.as_mut()[i * 3 + 1] = image.as_ref()[i + w * h];
        inter_image.as_mut()[i * 3 + 2] = image.as_ref()[i + 2 * w * h];
    }
    inter_image
}

pub(crate) fn planar_to_interleaved_rgba(image: RgbaImage) -> RgbaImage {
    let w = image.width() as usize;
    let h = image.height() as usize;
    let mut inter_image = RgbaImage::new(image.width(), image.height());
    let size = image.width() * image.height();
    for i in 0..size as usize {
        inter_image.as_mut()[i * 4] = image.as_ref()[i + 0 * w * h];
        inter_image.as_mut()[i * 4 + 1] = image.as_ref()[i + w * h];
        inter_image.as_mut()[i * 4 + 2] = image.as_ref()[i + 2 * w * h];
        inter_image.as_mut()[i * 4 + 3] = image.as_ref()[i + 3 * w * h];
    }
    inter_image
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_preserve_aspect_ratio() {
        assert_eq!(
            preserve_aspect_ratio(&Size { w: 100, h: 100 }, &Size { w: 50, h: 50 }),
            Size { w: 100, h: 100 }
        );
        assert_eq!(
            preserve_aspect_ratio(&Size { w: 100, h: 100 }, &Size { w: 25, h: 50 }),
            Size { w: 50, h: 100 }
        );
        assert_eq!(
            // Edge case
            preserve_aspect_ratio(&Size { w: 1, h: 1 }, &Size { w: 25, h: 50 }),
            Size { w: 1, h: 1 }
        );
        assert_eq!(
            // Edge case
            preserve_aspect_ratio(&Size { w: 100, h: 200 }, &Size { w: 1, h: 1 }),
            Size { w: 100, h: 100 }
        );
        assert_eq!(
            // Edge case
            preserve_aspect_ratio(&Size { w: 0, h: 5 }, &Size { w: 1, h: 10 }),
            Size { w: 0, h: 1 }
        );
        assert_eq!(
            // Not round ratio
            preserve_aspect_ratio(&Size { w: 33, h: 100 }, &Size { w: 12, h: 13 }),
            Size { w: 33, h: 35 }
        );
        assert_eq!(
            // Not round ratio
            preserve_aspect_ratio(&Size { w: 33, h: 15 }, &Size { w: 12, h: 13 }),
            Size { w: 13, h: 15 }
        );
    }
}
