use crate::{
    bindings::error::BioformatsBindingError,
    extra::models::{Address, PixelType, Region},
};
use std::num::TryFromIntError;
use thiserror::Error;

#[derive(Debug, Error)]
pub enum BioformatsWSIError {
    #[error(transparent)]
    Binding(#[from] BioformatsBindingError),

    #[error(transparent)]
    ConversionInt(#[from] TryFromIntError),

    #[error("Invalid Level: {0}")]
    InvalidLevel(u32),

    #[error("Invalid Address: {0:?}")]
    InvalidAddress(Address),

    #[error("Out of Bound Region: {0:?}")]
    OutOfBoundRegion(Region),

    #[error("Invalid Pixel Type: {0}")]
    InvalidPixelType(i32),

    #[error("UnsupportedImageType with {channel_count} channel and {pixel_type:?} pixel type")]
    UnsupportedImageType {
        channel_count: u32,
        pixel_type: PixelType,
    },

    #[error(transparent)]
    Resize(#[from] fast_image_resize::ResizeError),
}
