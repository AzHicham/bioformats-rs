use crate::bindings::{
    reader::{FormatReader, ImageReader, MemoizerBuilder},
    tools::DebugTool,
};
use j4rs::{Jvm, JvmBuilder};
use rstest::fixture;

#[fixture]
pub fn jvm() -> Jvm {
    JvmBuilder::new().build().expect("Failed to build JVM")
}

#[fixture]
#[once]
pub fn cmu_1_svs() -> &'static str {
    "tests/assets/aperio/CMU-1.svs"
}

#[fixture]
pub fn image_reader() -> impl FormatReader {
    let () = DebugTool::new(jvm())
        .set_root_level("WARN")
        .expect("Cannot set root log level");
    ImageReader::new(jvm()).expect("Failed to create ImageReader")
}

#[fixture]
pub fn memoize_reader() -> impl FormatReader {
    let () = DebugTool::new(jvm())
        .set_root_level("WARN")
        .expect("Cannot set root log level");
    MemoizerBuilder::new(jvm())
        .build()
        .expect("Failed to create Memoizer")
}
