# Bioformats-rs

![CI](https://github.com/AzHicham/bioformats-rs/actions/workflows/workflow.yml/badge.svg)
[![codecov](https://codecov.io/github/AzHicham/bioformats-rs/graph/badge.svg?token=Usvki7GItY)](https://codecov.io/github/AzHicham/bioformats-rs)

Rust bindings to Bioformats ([https://github.com/ome/bioformats](https://github.com/ome/bioformats)).

This work has no affiliations with the official Bioformats project.

## Requirements

* Rust &ge; 1.75
* A Java Runtime Environment (JRE) installed on your system (>= 9)

## Notes

This project is still in its early stages.

The Bioformats Java library is downloaded and extracted during the build process.
Currently, the version of the Bioformats library is fixed to 7.3.1.

This crate provides a high-level API to read image files using Bioformats.

### Crate structure:

- bindings: low-level bindings to the Bioformats Java library
- extra: additional utilities to work with Bioformats images
    - wsi: Utilities to work with whole-slide images (WSI) with interface similar
      to [OpenSlide](https://github.com/AzHicham/openslide-rs)

### Remaining work:

- Bindings to the rest of the Bioformats API such as ImageWriter, MetadataOptions, etc.

## Features:

- `extra`: Enable extra utilities
- `gpl-formats`: Download jar archive for GPL-licensed Bioformats formats (
  see [here](https://docs.openmicroscopy.org/bio-formats/7.3.1/supported-formats.html))
