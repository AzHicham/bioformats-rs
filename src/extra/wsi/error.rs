use crate::{
    bindings::error::BindingError,
    extra::models::{Address, PixelType, PixelTypeError, Region},
};
use std::num::TryFromIntError;
use thiserror::Error;

#[derive(Debug, Error)]
pub enum WSIError {
    #[error(transparent)]
    Binding(#[from] BindingError),

    #[error(transparent)]
    ConversionInt(#[from] TryFromIntError),

    #[error("Cannot open file: {0}")]
    Io(String),

    #[error("Invalid Level: {0}")]
    InvalidLevel(u32),

    #[error("Invalid Address: {0:?}")]
    InvalidAddress(Address),

    #[error("Out of Bound Region: {0:?}")]
    OutOfBoundRegion(Region),

    #[error(transparent)]
    InvalidPixelType(#[from] PixelTypeError),

    #[error("UnsupportedImageType with {channel_count} channel and {pixel_type:?} pixel type")]
    UnsupportedImageType {
        channel_count: u32,
        pixel_type: PixelType,
    },

    #[error(transparent)]
    Resize(#[from] fast_image_resize::ResizeError),

    #[error("Property not found: {0}")]
    PropertyNotFound(String),
}
