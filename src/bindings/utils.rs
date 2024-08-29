use crate::bindings::error::BindingError;
use j4rs::{Instance, InvocationArg, Jvm, Null};

pub(crate) fn is_null(jvm: &Jvm, instance: &Instance) -> Result<bool, BindingError> {
    Ok(jvm.check_equals(
        instance,
        InvocationArg::try_from(Null::Of("java.lang.Object"))?,
    )?)
}
