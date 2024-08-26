use j4rs::errors::J4RsError;
use thiserror::Error;

#[derive(Debug, Error)]
pub enum BioformatsBindingError {
    #[error(transparent)]
    JavaError(#[from] J4RsError),
}
