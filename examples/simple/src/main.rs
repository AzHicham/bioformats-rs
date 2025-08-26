use bioformats_rs::bindings::reader::{FormatReader, ImageReader};
use bioformats_rs::bindings::tools::DebugTool;
use bioformats_rs::j4rs::JvmBuilder;
use clap::Parser;

#[derive(Parser, Debug)]
#[command(
    name = "simple-example",
    about = "Read an image with bioformats-rs and print basic info"
)]
struct Cli {
    /// Path to the image file
    #[arg(short, long)]
    input: String,
}

fn main() {
    let args = Cli::parse();

    let jvm = JvmBuilder::new().build().expect("Failed to build JVM");
    let _ = DebugTool::new(&jvm).set_root_level("WARN");

    let reader = ImageReader::new(jvm).expect("Failed to create ImageReader");

    reader.set_id(&args.input).expect("Failed to open file");

    let format = reader.get_format().expect("format");
    let dim_order = reader.get_dimension_order().expect("dim order");
    let size_x = reader.get_size_x().expect("size_x");
    let size_y = reader.get_size_y().expect("size_y");
    let size_c = reader.get_size_c().expect("size_c");
    let size_z = reader.get_size_z().expect("size_z");
    let size_t = reader.get_size_t().expect("size_t");

    println!("File: {}", args.input);
    println!("Format: {}", format);
    println!("Dimension order: {}", dim_order);
    println!("SizeX x SizeY: {} x {}", size_x, size_y);
    println!(
        "SizeC x SizeZ x SizeT: {} x {} x {}",
        size_c, size_z, size_t
    );

    // Read a small region (thumbnail-like) at level 0 for demonstration
    let w = reader.get_thumb_size_x().unwrap_or(128);
    let h = reader.get_thumb_size_y().unwrap_or(128);
    let index = reader.get_index(0, 0, 0).expect("index");
    let bytes = reader.open_bytes(index, 0, 0, w, h).expect("open_bytes");
    println!(
        "Read {} bytes ({}x{}x{} channels)",
        bytes.len(),
        w,
        h,
        size_c
    );

    reader.close(false).ok();
}
