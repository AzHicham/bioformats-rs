use super::format::{FormatReader, ReaderInstance};
use crate::bindings::error::BindingError;
use j4rs::{Instance, InvocationArg, Jvm};
use std::borrow::Borrow;

/// `ImageReader` is the master file format reader for all supported formats.
/// It uses one instance of each reader subclass (specified in readers.txt, or other class list source)
/// to identify file formats and read data.
pub struct ImageReader<J: Borrow<Jvm>> {
    jvm: J,
    inner: Instance,
}

impl<J: Borrow<Jvm>> ImageReader<J> {
    pub fn new(jvm: J) -> Result<Self, BindingError> {
        let inner = jvm
            .borrow()
            .create_instance("loci.formats.ImageReader", InvocationArg::empty())?;
        Ok(ImageReader { jvm, inner })
    }
}

impl<J: Borrow<Jvm>> Borrow<Jvm> for ImageReader<J> {
    fn borrow(&self) -> &Jvm {
        self.jvm.borrow()
    }
}

impl<J: Borrow<Jvm>> ReaderInstance for ImageReader<J> {
    fn instance_ref(&self) -> &Instance {
        &self.inner
    }

    fn instance(self) -> Instance {
        self.inner
    }
}

impl<J: Borrow<Jvm>> FormatReader for ImageReader<J> {}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::fixture::jvm;
    use rstest::rstest;

    #[rstest]
    fn test_new(jvm: Jvm) {
        let _reader = ImageReader::new(jvm).expect("Failed to create ImageReader");
    }
}
