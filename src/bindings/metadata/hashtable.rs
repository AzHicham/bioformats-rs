use crate::bindings::{error::BindingError, utils::is_null};
use j4rs::{Instance, InvocationArg, Jvm};
use serde::de::DeserializeOwned;
use std::borrow::Borrow;

pub struct Metadata<J: Borrow<Jvm>> {
    jvm: J,
    inner: Instance,
}

impl<J: Borrow<Jvm>> Metadata<J> {
    pub(crate) fn new_with_instance(jvm: J, inner: Instance) -> Self {
        Self { jvm, inner }
    }

    pub fn keys(&self) -> Result<Vec<String>, BindingError> {
        let jvm = self.jvm.borrow();
        let res = jvm.invoke(&self.inner, "keySet", InvocationArg::empty())?;
        let res: Vec<String> = jvm.to_rust(res)?;
        Ok(res)
    }

    pub fn get<T: DeserializeOwned + 'static>(&self, key: &str) -> Result<Option<T>, BindingError> {
        let jvm = self.jvm.borrow();
        let res = jvm.invoke(&self.inner, "get", &[InvocationArg::try_from(key)?])?;
        if is_null(self.jvm.borrow(), &res)? {
            Ok(None)
        } else {
            let res: T = jvm.to_rust(res)?;
            Ok(Some(res))
        }
    }
}
