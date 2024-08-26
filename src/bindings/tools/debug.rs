use crate::bindings::error::BioformatsBindingError;
use j4rs::{InvocationArg, Jvm};
use std::borrow::Borrow;

pub struct DebugTool<J: Borrow<Jvm>> {
    jvm: J,
}

impl<J: Borrow<Jvm>> DebugTool<J> {
    pub fn new(jvm: J) -> Self {
        Self { jvm }
    }

    pub fn set_root_level(&self, level: &str) -> Result<(), BioformatsBindingError> {
        let jvm = self.jvm.borrow();
        jvm.invoke_static(
            "loci.common.DebugTools",
            "setRootLevel",
            &[InvocationArg::try_from(level)?],
        )?;
        Ok(())
    }

    pub fn is_enabled(&self) -> Result<bool, BioformatsBindingError> {
        let jvm = self.jvm.borrow();
        let res = jvm.invoke_static(
            "loci.common.DebugTools",
            "isEnabled",
            InvocationArg::empty(),
        )?;
        Ok(jvm.to_rust(res)?)
    }

    pub fn enable_logging(&self) -> Result<(), BioformatsBindingError> {
        let jvm = self.jvm.borrow();
        jvm.invoke_static(
            "loci.common.DebugTools",
            "enableLogging",
            InvocationArg::empty(),
        )?;
        Ok(())
    }

    pub fn enable_logging_level(&self, level: &str) -> Result<(), BioformatsBindingError> {
        let jvm = self.jvm.borrow();
        jvm.invoke_static(
            "loci.common.DebugTools",
            "enableLogging",
            &[InvocationArg::try_from(level)?],
        )?;
        Ok(())
    }

    pub fn enable_ij_logging(&self, debug: bool) -> Result<(), BioformatsBindingError> {
        let jvm = self.jvm.borrow();
        jvm.invoke_static(
            "loci.common.DebugTools",
            "enableIJLogging",
            &[InvocationArg::try_from(debug)?.into_primitive()?],
        )?;
        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::fixture::jvm;
    use j4rs::Jvm;
    use rstest::rstest;

    #[rstest]
    fn test_set_root_level(jvm: Jvm) {
        let debug_tool = DebugTool::new(jvm);
        for level in &["DEBUG", "INFO", "WARN", "ERROR", "ko"] {
            debug_tool
                .set_root_level(level)
                .expect("Failed to set root level");
        }
    }

    #[rstest]
    fn test_enable_logging(jvm: Jvm) {
        let debug_tool = DebugTool::new(jvm);
        debug_tool
            .enable_logging()
            .expect("Failed to enable logging");
        assert!(debug_tool.is_enabled().expect("Failed to check if enabled"));
    }

    #[rstest]
    fn test_enable_logging_level(jvm: Jvm) {
        let debug_tool = DebugTool::new(jvm);
        for level in &["DEBUG", "INFO", "WARN", "ERROR", "ko"] {
            debug_tool
                .enable_logging_level(level)
                .expect("Failed to enable logging level");
        }
    }

    #[rstest]
    fn test_enable_ij_logging(jvm: Jvm) {
        let debug_tool = DebugTool::new(jvm);
        debug_tool
            .enable_ij_logging(true)
            .expect("Failed to enable IJ logging");
    }
}
