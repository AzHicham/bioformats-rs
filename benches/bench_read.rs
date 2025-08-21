use bencher::{Bencher, benchmark_group, benchmark_main};
use bioformats_rs::{
    bindings::{
        reader::{FormatReader, MemoizerBuilder},
        tools::DebugTool,
    },
    extra::{
        models::{Address, Region, Size},
        wsi::{BioformatsSlide, DeepZoomGenerator},
    },
};
use j4rs::{Jvm, JvmBuilder};
use std::sync::Arc;

fn jvm() -> Jvm {
    JvmBuilder::new().build().expect("Failed to build JVM")
}

fn reader() -> impl FormatReader {
    let jvm = jvm();
    let () = DebugTool::new(&jvm)
        .set_root_level("WARN")
        .expect("Cannot set root log level");
    MemoizerBuilder::new(jvm)
        .build()
        .expect("Failed to create Memoizer")
}

fn default_slide() -> &'static str {
    "tests/assets/aperio/default.svs"
}

fn slide() -> BioformatsSlide<impl FormatReader> {
    BioformatsSlide::new(reader(), default_slide()).expect("Failed to create BioformatsSlide")
}

fn bioformats_read_region_256(bench: &mut Bencher) {
    let slide = slide();

    bench.iter(|| {
        slide.read_region(&Region {
            address: Address { x: 0, y: 0 },
            level: 0,
            size: Size { w: 256, h: 256 },
        })
    });
}

fn bioformats_read_region_512(bench: &mut Bencher) {
    let slide = slide();

    bench.iter(|| {
        slide.read_region(&Region {
            address: Address { x: 0, y: 0 },
            level: 0,
            size: Size { w: 512, h: 512 },
        })
    });
}

fn bioformats_read_image_256(bench: &mut Bencher) {
    let slide = slide();

    bench.iter(|| {
        slide.read_image(&Region {
            address: Address { x: 0, y: 0 },
            level: 0,
            size: Size { w: 256, h: 256 },
        })
    });
}

fn bioformats_read_image_512(bench: &mut Bencher) {
    let slide = slide();

    bench.iter(|| {
        slide.read_image(&Region {
            address: Address { x: 0, y: 0 },
            level: 0,
            size: Size { w: 512, h: 512 },
        })
    });
}

fn deepzoom_read_image_256(bench: &mut Bencher) {
    let slide = slide();
    let dz = DeepZoomGenerator::new(slide, 257).expect("Cannot create DeepZoomGenerator");

    bench.iter(|| dz.get_tile_image(12, Address { x: 0, y: 0 }));
}

fn deepzoom_read_image_512(bench: &mut Bencher) {
    let slide = slide();
    let dz = DeepZoomGenerator::new(slide, 511).expect("Cannot create DeepZoomGenerator");

    bench.iter(|| dz.get_tile_image(12, Address { x: 0, y: 0 }));
}

fn deepzoom_read_image_256_recreate_dz(bench: &mut Bencher) {
    let slide = slide();

    bench.iter(|| {
        let dz = DeepZoomGenerator::new(&slide, 257).expect("Cannot create DeepZoomGenerator");
        dz.get_tile_image(12, Address { x: 0, y: 0 })
    });
}

fn deepzoom_read_image_512_recreate_dz(bench: &mut Bencher) {
    let slide = slide();

    bench.iter(|| {
        let dz = DeepZoomGenerator::new(&slide, 511).expect("Cannot create DeepZoomGenerator");
        dz.get_tile_image(12, Address { x: 0, y: 0 })
    });
}

fn deepzoom_read_image_256_arc(bench: &mut Bencher) {
    let slide = Arc::new(slide());
    let dz = DeepZoomGenerator::new(slide, 257).expect("Cannot create DeepZoomGenerator");

    bench.iter(|| dz.get_tile_image(12, Address { x: 0, y: 0 }));
}

fn deepzoom_read_image_512_arc(bench: &mut Bencher) {
    let slide = Arc::new(slide());
    let dz = DeepZoomGenerator::new(slide, 511).expect("Cannot create DeepZoomGenerator");

    bench.iter(|| dz.get_tile_image(12, Address { x: 0, y: 0 }));
}

benchmark_group!(
    benches_region,
    bioformats_read_region_256,
    bioformats_read_region_512
);
benchmark_group!(
    benches_image,
    bioformats_read_image_256,
    bioformats_read_image_512
);
benchmark_group!(
    deepzoom_image,
    deepzoom_read_image_256,
    deepzoom_read_image_512,
    deepzoom_read_image_256_recreate_dz,
    deepzoom_read_image_512_recreate_dz,
    deepzoom_read_image_256_arc,
    deepzoom_read_image_512_arc
);
benchmark_main!(benches_region, benches_image, deepzoom_image);
