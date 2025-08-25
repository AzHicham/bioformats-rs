# WSI Example - bioformats-rs Extra Module

A command-line tool that demonstrates the advanced usage of the `bioformats-rs` library's extra module for working with Whole Slide Images (WSI) and large scientific image files.

## Overview

This example showcases the `bioformats-rs` extra module capabilities for:
- Reading and analyzing whole slide images (SVS, NDPI, VMS, etc.)
- Generating thumbnails at various resolutions
- Extracting specific regions (tiles) from multi-resolution images
- Accessing comprehensive metadata and slide information
- Exporting processed images in common formats (PNG)

## Features

- **Multi-resolution support**: Handles images with multiple pyramid levels
- **Thumbnail generation**: Creates scaled-down versions while preserving aspect ratio
- **Tile extraction**: Reads specific regions at any resolution level
- **Metadata access**: Comprehensive slide information and properties
- **Format flexibility**: Supports all WSI formats supported by Bio-Formats
- **Image export**: Save thumbnails and tiles as PNG files
- **Command-line interface**: Intuitive CLI with clap

## Installation

### Prerequisites

- Rust toolchain (1.70+)
- Java Runtime Environment (JRE) 8 or higher
- Bio-Formats libraries (automatically managed by bioformats-rs)

### Building

```bash
cd examples/wsi
cargo build --release
```

The binary will be created at `target/release/wsi-example`.

## Usage

### Basic Command (Information Only)

```bash
./wsi-example --input <path-to-wsi>
```

### Generate Thumbnail

```bash
./wsi-example --input slide.svs --thumb 512 --output thumb.png
```

### Extract Specific Tile

```bash
./wsi-example --input slide.svs --tile 0,0,0,1024,1024 --output tile.png
```

### Command Line Options

| Option | Short | Long | Description | Required |
|--------|-------|------|-------------|----------|
| Input file | `-i` | `--input` | Path to the whole slide image | Yes |
| Output file | `-o` | `--output` | Optional PNG output path | No |
| Thumbnail size | | `--thumb` | Generate thumbnail with max dimension | No |
| Tile specification | | `--tile` | Extract tile: level,x,y,width,height | No |

## Examples

### 1. Basic Information Display

```bash
./wsi-example --input sample.svs
```

**Output:**
```
=== WSI Information ===
File: sample.svs
Format: Aperio SVS
Levels: 3
Downsamples: [1.0, 4.0, 16.0]
Channel count: 3
Pixel type: U8

=== Level Dimensions ===
Level 0: 46000x32914
Level 1: 11500x8228
Level 2: 2875x2057
```

### 2. Generate Thumbnail

```bash
./wsi-example --input sample.svs --thumb 1024 --output overview.png
```

**Output:**
```
=== WSI Information ===
[... slide info ...]

=== Thumbnail Information ===
Thumbnail 1024x732 generated successfully
Thumbnail saved to: overview.png
```

### 3. Extract High-Resolution Tile

```bash
./wsi-example --input sample.svs --tile 0,1000,1000,2048,2048 --output detail.png
```

**Output:**
```
=== WSI Information ===
[... slide info ...]

=== Tile Information ===
Tile 0 @(1000, 1000) 2048x2048 read successfully
Image dimensions: 2048x2048
Tile saved to: detail.png
```

### 4. Extract Lower Resolution Overview

```bash
./wsi-example --input sample.svs --tile 2,0,0,1024,1024 --output overview.png
```

## Supported Formats

The tool supports all whole slide image formats supported by Bio-Formats:

- **Aperio**: SVS, SVD
- **Hamamatsu**: NDPI, VMS, VMU
- **Leica**: SCN, LIF
- **Olympus**: VSI
- **Zeiss**: CZI, ZVI
- **Generic**: TIFF, BigTIFF
- **And many more...**

## Technical Details

### Architecture

The example demonstrates the advanced `bioformats-rs` extra module architecture:

1. **JVM initialization**: Creates a Java Virtual Machine instance
2. **ImageReader creation**: Instantiates the Bio-Formats ImageReader
3. **BioformatsSlide creation**: Wraps the reader with WSI-specific functionality
4. **Multi-resolution handling**: Manages pyramid levels and downsampling
5. **Region extraction**: Efficiently reads specific image regions
6. **Image processing**: Converts raw data to standard image formats
7. **Export**: Saves processed images in common formats

### Key Components Used

- `BioformatsSlide`: High-level WSI interface
- `ImageReader`: Core Bio-Formats reader
- `Region` and `Size`: Geometric primitives for tile specification
- `Address`: Coordinate system for region positioning
- Image processing utilities for format conversion

### Multi-Resolution Pyramid

WSI files typically contain multiple resolution levels:

- **Level 0**: Full resolution (e.g., 46000x32914 pixels)
- **Level 1**: 4x downsampled (e.g., 11500x8228 pixels)
- **Level 2**: 16x downsampled (e.g., 2875x2057 pixels)

The tool automatically selects the optimal level for requested operations.

## Advanced Usage

### Thumbnail Generation

Thumbnails are generated with aspect ratio preservation:

```bash
# Generate 512x512 thumbnail (aspect ratio preserved)
./wsi-example --input slide.svs --thumb 512 --output thumb.png

# Generate 1024x1024 thumbnail
./wsi-example --input slide.svs --thumb 1024 --output large_thumb.png
```

### Tile Extraction

Tiles can be extracted from any resolution level:

```bash
# High-resolution tile from level 0
./wsi-example --input slide.svs --tile 0,0,0,1024,1024 --output hq_tile.png

# Medium-resolution tile from level 1
./wsi-example --input slide.svs --tile 1,0,0,1024,1024 --output mq_tile.png

# Low-resolution tile from level 2
./wsi-example --input slide.svs --tile 2,0,0,1024,1024 --output lq_tile.png
```

### Batch Processing

For automation, you can combine with shell scripts:

```bash
#!/bin/bash
# Generate thumbnails at multiple sizes
for size in 256 512 1024 2048; do
    ./wsi-example --input "$1" --thumb "$size" --output "thumb_${size}.png"
done
```

## Performance Considerations

- **Memory efficient**: Reads only requested regions
- **Level optimization**: Automatically selects best resolution for operations
- **Caching**: Bio-Formats provides internal caching for repeated access
- **Parallel processing**: Multiple tiles can be processed concurrently

### Memory Usage Guidelines

- **Thumbnails**: Low memory usage, suitable for any image size
- **Tiles**: Memory usage scales with tile size
- **Large tiles**: Consider using lower resolution levels for very large regions

## Error Handling

The tool includes comprehensive error handling:

- **File validation**: Checks file existence and format support
- **Region validation**: Ensures requested tiles are within image bounds
- **Format errors**: Graceful handling of unsupported or corrupted files
- **Memory errors**: Safe handling of large tile requests
- **Export errors**: Clear feedback for file saving issues

### Common Error Scenarios

1. **Invalid tile coordinates**: Clear error messages for out-of-bounds requests
2. **Unsupported formats**: Helpful error messages for unsupported file types
3. **Memory limitations**: Graceful degradation for very large operations
4. **File permissions**: Clear error messages for write permission issues

## Troubleshooting

### Common Issues

1. **JVM memory errors**: Increase JVM heap size for large images
2. **Slow performance**: Use lower resolution levels for large tiles
3. **Format errors**: Ensure file is not corrupted or incomplete
4. **Permission errors**: Check write permissions for output directory

### Debug Mode

For troubleshooting, you can modify the logging level in the source code:

```rust
let _ = DebugTool::new(jvm.clone()).set_root_level("DEBUG");
```

### Performance Tuning

- **JVM heap size**: Adjust for your system's memory constraints
- **Tile size optimization**: Balance between memory usage and processing speed
- **Resolution level selection**: Choose appropriate levels for your use case

## Use Cases

### Research and Analysis

- **Pathology**: Generate overview images for slide review
- **Research**: Extract specific regions for detailed analysis
- **Documentation**: Create standardized thumbnails for databases

### Web Applications

- **Viewers**: Generate thumbnails for web-based slide viewers
- **APIs**: Provide tile-based access to large images
- **Content management**: Create preview images for slide libraries

### Quality Control

- **Validation**: Verify slide integrity and quality
- **Comparison**: Generate standardized views for comparison
- **Documentation**: Create reference images for protocols

## Contributing

This example is part of the `bioformats-rs` project. To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This example is licensed under the same terms as the `bioformats-rs` library:
- Apache License 2.0
- MIT License

## Related Documentation

- [bioformats-rs Documentation](https://docs.rs/bioformats-rs)
- [Bio-Formats Documentation](https://bio-formats.readthedocs.io/)
- [WSI Standards](https://openslide.org/)
- [OME-TIFF Specification](https://docs.openmicroscopy.org/ome-model/6.2.0/ome-tiff/)
- [Digital Pathology Standards](https://www.dicomstandard.org/)
