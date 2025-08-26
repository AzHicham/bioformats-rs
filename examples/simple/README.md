# Simple Example - bioformats-rs

A command-line tool that demonstrates the basic usage of the `bioformats-rs` library for reading and analyzing image files.

## Overview

This example shows how to use the core `bioformats-rs` library to:
- Open image files in various formats (TIFF, JPEG, PNG, SVS, etc.)
- Extract basic metadata and image properties
- Read image dimensions and channel information
- Access image data at different resolutions

## Features

- **Multi-format support**: Reads any image format supported by Bio-Formats
- **Metadata extraction**: Shows file format, dimension order, and image sizes
- **Channel information**: Displays RGB channel count and interleaving
- **Data access**: Demonstrates reading image bytes from specific regions
- **Command-line interface**: Easy-to-use CLI with clap

## Installation

### Prerequisites

- Rust toolchain (1.70+)
- Java Runtime Environment (JRE) 8 or higher
- Bio-Formats libraries (automatically managed by bioformats-rs)

### Building

```bash
cd examples/simple
cargo build --release
```

The binary will be created at `target/release/simple-example`.

## Usage

### Basic Command

```bash
./simple-example --input <path-to-image>
```

### Command Line Options

| Option | Short | Long | Description | Required |
|--------|-------|------|-------------|----------|
| Input file | `-i` | `--input` | Path to the image file to analyze | Yes |

### Examples

#### Analyze a TIFF file
```bash
./simple-example --input sample.tif
```

#### Analyze a whole slide image (SVS)
```bash
./simple-example --input slide.svs
```

#### Analyze a JPEG image
```bash
./simple-example --input image.jpg
```

## Output

The tool provides comprehensive information about the image:

```
File: sample.tif
Format: TIFF
Dimension order: XYCZT
SizeX x SizeY: 2048 x 1536
SizeC x SizeZ x SizeT: 3 x 1 x 1
Read 786432 bytes (128x128x3 channels)
```

### Information Displayed

- **File path**: The input file location
- **Format**: Detected image format (TIFF, JPEG, SVS, etc.)
- **Dimension order**: Spatial and temporal dimension ordering (e.g., XYCZT)
- **Dimensions**: Width, height, channels, Z-slices, and time points
- **Data summary**: Number of bytes read and region dimensions

## Supported Formats

The tool supports all formats supported by Bio-Formats, including:

- **Raster formats**: TIFF, JPEG, PNG, BMP, GIF
- **Scientific formats**: OME-TIFF, ICS, LIF
- **Whole slide images**: SVS, NDPI, VMS, VMU
- **Microscopy formats**: CZI, LSM, ND2
- **And many more...**

## Technical Details

### Architecture

The example demonstrates the core `bioformats-rs` architecture:

1. **JVM initialization**: Creates a Java Virtual Machine instance
2. **ImageReader creation**: Instantiates the Bio-Formats ImageReader
3. **File opening**: Sets the input file using `set_id()`
4. **Metadata extraction**: Retrieves format and dimension information
5. **Data reading**: Demonstrates reading image bytes from regions
6. **Cleanup**: Properly closes the reader and JVM resources

### Key Components Used

- `ImageReader`: Main reader class for all supported formats
- `FormatReader` trait: Common interface for all readers
- `DebugTool`: Logging and debugging utilities
- JVM management: Java runtime environment handling

## Error Handling

The tool includes comprehensive error handling:

- **File not found**: Clear error messages for missing files
- **Unsupported formats**: Graceful handling of unsupported file types
- **JVM errors**: Proper error reporting for Java-related issues
- **Memory errors**: Safe handling of large image files

## Performance Considerations

- **Memory efficient**: Reads only small regions for demonstration
- **JVM optimization**: Configures logging levels for better performance
- **Resource management**: Proper cleanup of Java objects and memory

## Troubleshooting

### Common Issues

1. **JVM not found**: Ensure Java is installed and in your PATH
2. **Memory errors**: Large images may require more JVM heap space
3. **Format errors**: Some corrupted files may not be readable

### Debug Mode

For troubleshooting, you can modify the logging level in the source code:

```rust
let _ = DebugTool::new(jvm.clone()).set_root_level("DEBUG");
```

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
- [OME-TIFF Specification](https://docs.openmicroscopy.org/ome-model/6.2.0/ome-tiff/)
