use super::format::{FormatReader, ReaderInstance};
use crate::bindings::error::BindingError;
use j4rs::{Instance, InvocationArg, Jvm};
use std::{borrow::Borrow, time::Duration};

pub struct Memoizer<J: Borrow<Jvm>> {
    jvm: J,
    inner: Instance,
}

pub struct MemoizerBuilder<J: Borrow<Jvm>> {
    jvm: J,
    instance: Option<Instance>,
    minimum_elapsed: Duration,
    cache_dir: Option<String>,
}

impl<J: Borrow<Jvm>> MemoizerBuilder<J> {
    /// Create a new `MemoizerBuilder`
    pub fn new(jvm: J) -> Self {
        MemoizerBuilder {
            jvm,
            instance: None,
            minimum_elapsed: Duration::from_millis(100),
            cache_dir: None,
        }
    }

    /// Set the minimum elapsed time
    /// Default is 100ms
    pub fn with_minimum_elapsed(mut self, minimum_elapsed: Duration) -> Self {
        self.minimum_elapsed = minimum_elapsed;
        self
    }

    /// Set the reader instance
    /// Default is None, the Memoizer will create a new reader instance
    pub fn with_reader<R: FormatReader>(mut self, reader: R) -> Self {
        self.instance = Some(reader.instance());
        self
    }

    /// Set the cache directory
    /// Default is None, the Memoizer will creat memo files under the same directory as the original file
    /// only if the call to `set_id` takes longer than `minimum_elapsed`
    pub fn with_cache_dir<T: AsRef<str>>(mut self, cache_dir: T) -> Self {
        self.cache_dir = Some(cache_dir.as_ref().to_string());
        self
    }

    /// Build the Memoizer
    pub fn build(self) -> Result<Memoizer<J>, BindingError> {
        let jvm = self.jvm.borrow();

        let mut args = vec![];
        if let Some(instance) = self.instance {
            args.push(InvocationArg::from(instance));
        }

        args.push(
            InvocationArg::try_from(
                TryInto::<i64>::try_into(self.minimum_elapsed.as_millis()).unwrap_or(i64::MAX),
            )?
            .into_primitive()?,
        );

        if let Some(cache_dir) = self.cache_dir {
            let instance =
                jvm.create_instance("java.io.File", &[InvocationArg::try_from(cache_dir)?])?;
            args.push(InvocationArg::from(instance));
        }

        let instance = jvm.create_instance("loci.formats.Memoizer", &args)?;

        Ok(Memoizer {
            jvm: self.jvm,
            inner: instance,
        })
    }
}

impl<J: Borrow<Jvm>> Borrow<Jvm> for Memoizer<J> {
    fn borrow(&self) -> &Jvm {
        self.jvm.borrow()
    }
}

impl<J: Borrow<Jvm>> ReaderInstance for Memoizer<J> {
    fn instance_ref(&self) -> &Instance {
        &self.inner
    }

    fn instance(self) -> Instance {
        self.inner
    }
}

impl<J: Borrow<Jvm>> FormatReader for Memoizer<J> {}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::{bindings::reader::ImageReader, fixture::jvm};
    use j4rs::Jvm;
    use rstest::rstest;

    #[rstest]
    fn test_new(jvm: Jvm) {
        let _memoizer = MemoizerBuilder::new(jvm)
            .build()
            .expect("Failed to create Memoizer");
    }

    #[rstest]
    fn test_new_with_cache_dir(jvm: Jvm) {
        let _memoizer = MemoizerBuilder::new(jvm)
            .with_cache_dir("/tmp")
            .build()
            .expect("Failed to create Memoizer");
    }

    #[rstest]
    fn test_new_with_reader(jvm: Jvm) {
        let image_reader = ImageReader::new(&jvm).expect("Failed to create ImageReader");
        let _memoizer = MemoizerBuilder::new(&jvm)
            .with_reader(image_reader)
            .build()
            .expect("Failed to create Memoizer");
    }

    #[rstest]
    fn test_new_with_reader_and_cache_dir(jvm: Jvm) {
        let image_reader = ImageReader::new(&jvm).expect("Failed to create ImageReader");
        let _memoizer = MemoizerBuilder::new(&jvm)
            .with_reader(image_reader)
            .with_cache_dir("/tmp")
            .build()
            .expect("Failed to create Memoizer");
    }
}
