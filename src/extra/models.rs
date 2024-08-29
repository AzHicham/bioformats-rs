use thiserror::Error;

/// Region struct
/// Used to retrieve a tile in a WSI
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct Region {
    pub size: Size,
    pub level: u32,
    pub address: Address,
}

/// Simple Size struct
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct Size {
    pub w: u32,
    pub h: u32,
}

/// Simple Address struct
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct Address {
    pub x: u32,
    pub y: u32,
}

/// `PixelType` enum
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PixelType {
    I8,
    U8,
    I16,
    U16,
    I32,
    U32,
    F32,
    F64,
}

impl TryFrom<i32> for PixelType {
    type Error = PixelTypeError;

    fn try_from(value: i32) -> Result<Self, Self::Error> {
        match value {
            0 => Ok(PixelType::I8),
            1 => Ok(PixelType::U8),
            2 => Ok(PixelType::I16),
            3 => Ok(PixelType::U16),
            4 => Ok(PixelType::I32),
            5 => Ok(PixelType::U32),
            6 => Ok(PixelType::F32),
            7 => Ok(PixelType::F64),
            _ => Err(Self::Error::InvalidPixelType(value)),
        }
    }
}

#[derive(Debug, Error)]
pub enum PixelTypeError {
    #[error("Invalid Pixel Type: {0}")]
    InvalidPixelType(i32),
}
