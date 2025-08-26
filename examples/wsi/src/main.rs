use bioformats_rs::bindings::reader::ImageReader;
use bioformats_rs::bindings::tools::DebugTool;
use bioformats_rs::extra::models::{Address, Region, Size};
use bioformats_rs::extra::wsi::BioformatsSlide;
use bioformats_rs::j4rs::JvmBuilder;
use clap::Parser;

#[derive(Parser, Debug)]
#[command(
    name = "wsi-example",
    about = "Read a WSI and export a thumbnail or tile using bioformats-rs extra module"
)]
struct Cli {
    /// Path to the whole slide image
    #[arg(short, long)]
    input: String,

    /// Optional output PNG path for thumbnail or tile
    #[arg(short, long)]
    output: Option<String>,

    /// Generate a thumbnail with given max width and height (e.g., 512)
    #[arg(long, default_value_t = 512)]
    thumb: u32,

    /// Read a tile at level, x, y, width, height instead of thumbnail (comma-separated)
    /// Example: --tile 0,0,0,1024,1024
    #[arg(long)]
    tile: Option<String>,
}

fn main() {
    let args = Cli::parse();

    println!("Starting bioformats-rs WSI example...");
    let jvm = JvmBuilder::new().build().expect("Failed to build JVM");
    let _ = DebugTool::new(&jvm).set_root_level("WARN");

    let reader = ImageReader::new(jvm).expect("Failed to create ImageReader");
    let slide = BioformatsSlide::new(reader, &args.input).expect("Failed to open slide");

    println!("File: {}", args.input);
    println!("Levels: {}", slide.get_level_count());
    println!("Downsamples: {:?}", slide.get_all_level_downsample());
    println!("All level dims: {:?}", slide.get_all_level_dimensions());
    println!("Level 0 dims: {:?}", slide.get_level_dimensions(0).unwrap());

    if let Some(spec) = args.tile.as_deref() {
        let parts: Vec<_> = spec.split(',').collect();
        if parts.len() != 5 {
            panic!("tile must be level,x,y,w,h");
        }
        let level: u32 = parts[0].parse().expect("level");
        let x: u32 = parts[1].parse().expect("x");
        let y: u32 = parts[2].parse().expect("y");
        let w: u32 = parts[3].parse().expect("w");
        let h: u32 = parts[4].parse().expect("h");

        let region = Region {
            level,
            address: Address { x, y },
            size: Size { w, h },
        };
        let image = slide.read_image(&region).expect("read tile");
        println!("Tile {} @({}, {}) {}x{} read ok", level, x, y, w, h);
        if let Some(out) = args.output {
            image.save(out).expect("save png");
        }
        return;
    }

    // Thumbnail
    let image = slide
        .thumbnail(&Size {
            w: args.thumb,
            h: args.thumb,
        })
        .expect("thumbnail");
    println!("Thumbnail {}x{} read ok", image.width(), image.height());
    if let Some(out) = args.output {
        image.save(out).expect("save png");
    }
}
