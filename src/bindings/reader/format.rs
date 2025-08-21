use crate::bindings::{
    error::BindingError,
    metadata::{Metadata, OmeXmlMetadata},
};
use j4rs::{Instance, InvocationArg, Jvm};
use std::borrow::Borrow;

// This is a helper trait that is used to get the instance reference of the reader.
// It must NOT be used for Java classes that are not readers.
pub trait ReaderInstance {
    fn instance_ref(&self) -> &Instance;
    fn instance(self) -> Instance;
}

/// This trait is used as the common interface for all the readers.
/// It is the equivalent of the `loci.formats.IFormatReader` interface in Java.
pub trait FormatReader: Borrow<Jvm> + ReaderInstance {
    /// Sets the current file name to be opened
    fn set_id<T: AsRef<str>>(&self, filename: T) -> Result<(), BindingError> {
        let jvm = self.borrow();
        jvm.invoke(
            self.instance_ref(),
            "setId",
            &[InvocationArg::try_from(filename.as_ref())?],
        )?;
        Ok(())
    }

    /// Return whether resolution flattening is enabled.
    fn has_flattened_resolutions(&self) -> Result<bool, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(
            self.instance_ref(),
            "hasFlattenedResolutions",
            InvocationArg::empty(),
        )?;
        Ok(jvm.to_rust(res)?)
    }

    /// Gets the number of channels returned with each call to openBytes.
    /// The most common case where this value is greater than 1 is for interleaved RGB data, such as a 24-bit color image plane.
    /// However, it is possible for this value to be greater than 1 for non-interleaved data, such as an RGB TIFF with Planar rather than Chunky configuration.
    fn get_rgb_channel_count(&self) -> Result<i32, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(
            self.instance_ref(),
            "getRGBChannelCount",
            InvocationArg::empty(),
        )?;
        Ok(jvm.to_rust(res)?)
    }

    /// Gets whether the channels are interleaved.
    fn is_interleaved(&self) -> Result<bool, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(self.instance_ref(), "isInterleaved", InvocationArg::empty())?;
        Ok(jvm.to_rust(res)?)
    }

    /// Gets whether the data is in little-endian format
    fn is_little_endian(&self) -> Result<bool, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(
            self.instance_ref(),
            "isLittleEndian",
            InvocationArg::empty(),
        )?;
        Ok(jvm.to_rust(res)?)
    }

    /// Returns the optimal sub-image width for use with openBytes
    fn get_optimal_tile_width(&self) -> Result<i32, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(
            self.instance_ref(),
            "getOptimalTileWidth",
            InvocationArg::empty(),
        )?;
        Ok(jvm.to_rust(res)?)
    }

    /// Returns the optimal sub-image height for use with openBytes
    fn get_optimal_tile_height(&self) -> Result<i32, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(
            self.instance_ref(),
            "getOptimalTileHeight",
            InvocationArg::empty(),
        )?;
        Ok(jvm.to_rust(res)?)
    }

    /// Gets the pixel type
    fn get_pixel_type(&self) -> Result<i32, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(self.instance_ref(), "getPixelType", InvocationArg::empty())?;
        Ok(jvm.to_rust(res)?)
    }

    /// Gets a five-character string representing the dimension order in which planes will be returned
    /// Example: XYCZT
    fn get_dimension_order(&self) -> Result<String, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(
            self.instance_ref(),
            "getDimensionOrder",
            InvocationArg::empty(),
        )?;
        Ok(jvm.to_rust(res)?)
    }

    /// Gets the name of this file format
    fn get_format(&self) -> Result<String, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(self.instance_ref(), "getFormat", InvocationArg::empty())?;
        Ok(jvm.to_rust(res)?)
    }

    /// Determines the number of image planes in the current file.
    fn get_image_count(&self) -> Result<i32, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(self.instance_ref(), "getImageCount", InvocationArg::empty())?;
        Ok(jvm.to_rust(res)?)
    }

    /// Get the current resolution level
    fn get_resolution(&self) -> Result<i32, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(self.instance_ref(), "getResolution", InvocationArg::empty())?;
        Ok(jvm.to_rust(res)?)
    }

    /// Gets the currently active series
    fn get_series(&self) -> Result<i32, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(self.instance_ref(), "getSeries", InvocationArg::empty())?;
        Ok(jvm.to_rust(res)?)
    }

    /// Return the number of resolutions for the current series.
    /// Resolutions are stored in descending order, so the largest resolution is first and the smallest resolution is last.
    fn get_resolution_count(&self) -> Result<i32, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(
            self.instance_ref(),
            "getResolutionCount",
            InvocationArg::empty(),
        )?;
        Ok(jvm.to_rust(res)?)
    }

    /// Gets the number of series in this file.
    fn get_series_count(&self) -> Result<i32, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(
            self.instance_ref(),
            "getSeriesCount",
            InvocationArg::empty(),
        )?;
        Ok(jvm.to_rust(res)?)
    }

    /// Gets the size of the X dimension.
    fn get_size_x(&self) -> Result<i32, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(self.instance_ref(), "getSizeX", InvocationArg::empty())?;
        Ok(jvm.to_rust(res)?)
    }

    /// Gets the size of the Y dimension.
    fn get_size_y(&self) -> Result<i32, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(self.instance_ref(), "getSizeY", InvocationArg::empty())?;
        Ok(jvm.to_rust(res)?)
    }

    /// Gets the size of the Z dimension.
    fn get_size_z(&self) -> Result<i32, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(self.instance_ref(), "getSizeZ", InvocationArg::empty())?;
        Ok(jvm.to_rust(res)?)
    }

    /// Gets the size of the C/Channel dimension.
    fn get_size_c(&self) -> Result<i32, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(self.instance_ref(), "getSizeC", InvocationArg::empty())?;
        Ok(jvm.to_rust(res)?)
    }

    /// Gets the size of the T/Time dimension.
    fn get_size_t(&self) -> Result<i32, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(self.instance_ref(), "getSizeT", InvocationArg::empty())?;
        Ok(jvm.to_rust(res)?)
    }

    /// Get the size of the X dimension for the thumbnail
    fn get_thumb_size_x(&self) -> Result<i32, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(self.instance_ref(), "getThumbSizeX", InvocationArg::empty())?;
        Ok(jvm.to_rust(res)?)
    }

    /// Get the size of the Y dimension for the thumbnail
    fn get_thumb_size_y(&self) -> Result<i32, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(self.instance_ref(), "getThumbSizeY", InvocationArg::empty())?;
        Ok(jvm.to_rust(res)?)
    }

    /// Gets whether the image planes are indexed color.
    fn is_indexed(&self) -> Result<bool, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(self.instance_ref(), "isIndexed", InvocationArg::empty())?;
        Ok(jvm.to_rust(res)?)
    }

    /// Checks if the image planes in the file have more than one channel per `open_bytes` call.
    /// This method returns true if and only if getRGBChannelCount() returns a value greater than 1.
    fn is_rgb(&self) -> Result<bool, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(self.instance_ref(), "isRGB", InvocationArg::empty())?;
        Ok(jvm.to_rust(res)?)
    }

    /// Gets whether the current series is a lower resolution copy of a different series
    fn is_thumbnail_series(&self) -> Result<bool, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(
            self.instance_ref(),
            "isThumbnailSeries",
            InvocationArg::empty(),
        )?;
        Ok(jvm.to_rust(res)?)
    }

    /// Gets the rasterized index corresponding to the given Z, C and T coordinates (real sizes).
    fn get_index(&self, z: i32, c: i32, t: i32) -> Result<i32, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(
            self.instance_ref(),
            "getIndex",
            &[
                InvocationArg::try_from(z)?.into_primitive()?,
                InvocationArg::try_from(c)?.into_primitive()?,
                InvocationArg::try_from(t)?.into_primitive()?,
            ],
        )?;
        Ok(jvm.to_rust(res)?)
    }

    /// Obtains a sub-image of the specified image plane into a pre-allocated byte array.
    fn open_bytes(&self, no: i32, x: i32, y: i32, w: i32, h: i32) -> Result<Vec<i8>, BindingError> {
        let jvm = self.borrow();

        let res = jvm.invoke(
            self.instance_ref(),
            "openBytes",
            &[
                InvocationArg::try_from(no)?.into_primitive()?,
                InvocationArg::try_from(x)?.into_primitive()?,
                InvocationArg::try_from(y)?.into_primitive()?,
                InvocationArg::try_from(w)?.into_primitive()?,
                InvocationArg::try_from(h)?.into_primitive()?,
            ],
        )?;
        Ok(jvm.to_rust(res)?)
    }

    /// Set whether or not to flatten resolutions into individual series.
    fn set_flattened_resolutions(&self, flattened: bool) -> Result<(), BindingError> {
        let jvm = self.borrow();
        jvm.invoke(
            self.instance_ref(),
            "setFlattenedResolutions",
            &[InvocationArg::try_from(flattened)?.into_primitive()?],
        )?;
        Ok(())
    }

    /// Activates the specified series
    fn set_series(&self, series: i32) -> Result<(), BindingError> {
        let jvm = self.borrow();
        jvm.invoke(
            self.instance_ref(),
            "setSeries",
            &[InvocationArg::try_from(series)?.into_primitive()?],
        )?;
        Ok(())
    }

    /// Set the resolution level.
    fn set_resolution(&self, resolution: i32) -> Result<(), BindingError> {
        let jvm = self.borrow();
        jvm.invoke(
            self.instance_ref(),
            "setResolution",
            &[InvocationArg::try_from(resolution)?.into_primitive()?],
        )?;
        Ok(())
    }

    /// Closes the currently open file.
    fn close(&self, file_only: bool) -> Result<(), BindingError> {
        let jvm = self.borrow();
        jvm.invoke(
            self.instance_ref(),
            "close",
            &[InvocationArg::try_from(file_only)?.into_primitive()?],
        )?;
        Ok(())
    }

    /// Get series metadata
    fn get_series_metadata(&self) -> Result<Metadata<&Jvm>, BindingError> {
        let jvm = self.borrow();
        let metadata = jvm.invoke(
            self.instance_ref(),
            "getSeriesMetadata",
            InvocationArg::empty(),
        )?;
        Ok(Metadata::new_with_instance(jvm, metadata))
    }

    /// Get global metadata
    fn get_global_metadata(&self) -> Result<Metadata<&Jvm>, BindingError> {
        let jvm = self.borrow();
        let metadata = jvm.invoke(
            self.instance_ref(),
            "getGlobalMetadata",
            InvocationArg::empty(),
        )?;
        Ok(Metadata::new_with_instance(jvm, metadata))
    }

    /// Sets the metadata store associated with this reader.
    fn set_metadata_store<J: Borrow<Jvm>>(
        &self,
        metadata: OmeXmlMetadata<J>,
    ) -> Result<(), BindingError> {
        let jvm = self.borrow();
        jvm.invoke(
            self.instance_ref(),
            "setMetadataStore",
            &[InvocationArg::from(metadata.inner)],
        )?;
        Ok(())
    }

    /// Gets the metadata store associated with this reader.
    fn get_metadata_store(&self) -> Result<OmeXmlMetadata<&Jvm>, BindingError> {
        let jvm = self.borrow();
        let res = jvm.invoke(
            self.instance_ref(),
            "getMetadataStore",
            InvocationArg::empty(),
        )?;
        let res = jvm.cast(&res, "loci.formats.meta.IMetadata")?;
        Ok(OmeXmlMetadata::new_with_instance(jvm, res))
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::fixture::{cmu_1_svs, image_reader, memoize_reader};
    use rstest::rstest;

    #[rstest]
    #[case(memoize_reader(), cmu_1_svs())]
    #[case(image_reader(), cmu_1_svs())]
    fn test_open_file(#[case] reader: impl FormatReader, #[case] filename: &str) {
        let () = reader.set_id(filename).expect("Failed to open file");
    }

    #[rstest]
    #[case(image_reader())]
    fn test_flattened_resolution_1(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        reader
            .set_flattened_resolutions(true)
            .expect("Failed to set flattened resolutions");
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert!(
            reader
                .has_flattened_resolutions()
                .expect("Failed to get flattened resolutions")
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_flattened_resolution_2(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        reader
            .set_flattened_resolutions(false)
            .expect("Failed to set flattened resolutions");
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert!(
            !reader
                .has_flattened_resolutions()
                .expect("Failed to get flattened resolutions")
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_rgb_channel_count(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert_eq!(
            reader
                .get_rgb_channel_count()
                .expect("Failed to get flattened resolutions"),
            3
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_is_interleaved(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert!(
            !reader
                .is_interleaved()
                .expect("Failed to get flattened resolutions"),
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_is_little_endian(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert!(
            reader
                .is_little_endian()
                .expect("Failed to get flattened resolutions"),
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_optimal_tile_width(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert_eq!(
            reader
                .get_optimal_tile_width()
                .expect("Failed to get flattened resolutions"),
            256
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_optimal_tile_height(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert_eq!(
            reader
                .get_optimal_tile_height()
                .expect("Failed to get flattened resolutions"),
            256
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_pixel_type(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert_eq!(
            reader
                .get_pixel_type()
                .expect("Failed to get flattened resolutions"),
            1
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_dimension_order(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert_eq!(
            reader
                .get_dimension_order()
                .expect("Failed to get flattened resolutions"),
            "XYCZT".to_string()
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_format(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert_eq!(
            reader
                .get_dimension_order()
                .expect("Failed to get flattened resolutions"),
            "XYCZT".to_string()
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_image_count(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert_eq!(
            reader
                .get_image_count()
                .expect("Failed to get flattened resolutions"),
            1
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_get_active_resolution(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert_eq!(
            reader
                .get_resolution()
                .expect("Failed to get flattened resolutions"),
            0
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_get_active_series(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert_eq!(
            reader
                .get_series()
                .expect("Failed to get flattened resolutions"),
            0
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_resolution_count_flattened(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert_eq!(
            reader
                .get_resolution_count()
                .expect("Failed to get flattened resolutions"),
            1
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_resolution_count_not_flattened(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        reader
            .set_flattened_resolutions(false)
            .expect("Failed to set flattened resolutions");
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert_eq!(
            reader
                .get_resolution_count()
                .expect("Failed to get flattened resolutions"),
            3
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_series_count_flattened(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert_eq!(
            reader
                .get_series_count()
                .expect("Failed to get flattened resolutions"),
            5
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_series_count_not_flattened(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        reader
            .set_flattened_resolutions(false)
            .expect("Failed to set flattened resolutions");
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert_eq!(
            reader
                .get_series_count()
                .expect("Failed to get flattened resolutions"),
            3
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_size(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert_eq!(
            reader
                .get_size_x()
                .expect("Failed to get flattened resolutions"),
            46000
        );
        assert_eq!(
            reader
                .get_size_y()
                .expect("Failed to get flattened resolutions"),
            32914
        );
        assert_eq!(
            reader
                .get_size_c()
                .expect("Failed to get flattened resolutions"),
            3
        );
        assert_eq!(
            reader
                .get_size_z()
                .expect("Failed to get flattened resolutions"),
            1
        );
        assert_eq!(
            reader
                .get_size_t()
                .expect("Failed to get flattened resolutions"),
            1
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_thumb_size(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert_eq!(
            reader
                .get_thumb_size_x()
                .expect("Failed to get flattened resolutions"),
            387
        );
        assert_eq!(
            reader
                .get_thumb_size_y()
                .expect("Failed to get flattened resolutions"),
            463
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_is_indexed(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert!(
            !reader
                .is_indexed()
                .expect("Failed to get flattened resolutions")
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_is_rgb(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert!(
            reader
                .is_rgb()
                .expect("Failed to get flattened resolutions")
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_is_thumbnail_series(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert!(
            !reader
                .is_thumbnail_series()
                .expect("Failed to get flattened resolutions")
        );
        reader.set_series(1).expect("Failed to set series");
        assert!(
            reader
                .is_thumbnail_series()
                .expect("Failed to get flattened resolutions")
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_get_index(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        assert_eq!(
            reader
                .get_index(0, 0, 0)
                .expect("Failed to get flattened resolutions"),
            0
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_open_bytes(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        let bytes = reader
            .open_bytes(0, 0, 0, 100, 200)
            .expect("Failed to get flattened resolutions");
        assert_eq!(bytes.len(), 100 * 200 * 3); // RGB image
    }

    #[rstest]
    #[case(image_reader())]
    fn test_set_series(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        reader.set_series(1).expect("Failed to set series");
        assert_eq!(
            reader
                .get_series()
                .expect("Failed to get flattened resolutions"),
            1
        );
        let res = reader.set_series(5); // > series_count = 5 (flattened)
        assert!(res.is_err());
    }

    #[rstest]
    #[case(image_reader())]
    fn test_set_resolution(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        reader.set_resolution(0).expect("Failed to set series");
        assert_eq!(
            reader
                .get_resolution()
                .expect("Failed to get flattened resolutions"),
            0
        );
        let res = reader.set_resolution(1); // > resolution_count = 1 (flattened)
        assert!(res.is_err());
    }

    #[rstest]
    #[case(image_reader())]
    fn test_close(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        reader.close(false).expect("Failed to close reader");
    }

    #[rstest]
    #[case(image_reader())]
    fn test_metadata_series(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        let metadata = reader
            .get_series_metadata()
            .expect("Failed to get series metadata");
        assert_eq!(
            &metadata.keys().expect(""),
            &[
                "Date",
                "MPP",
                "ImageID",
                "User",
                "46920x33014 [0,100 46000x32914] (256x256) JPEG/RGB Q",
                "Parmset",
                "Filtered",
                "LineCameraSkew",
                "StripeWidth",
                "Left",
                "AppMag",
                "LineAreaYOffset",
                "Time",
                "LineAreaXOffset",
                "Originalheight",
                "ICC Profile",
                "OriginalWidth",
                "Filename",
                "Focus Offset",
                "Top",
                "ScanScope ID"
            ]
            .into_iter()
            .map(|v| v.to_string())
            .collect::<Vec<_>>()
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_metadata_series_value(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        let metadata = reader
            .get_series_metadata()
            .expect("Failed to get series metadata");
        assert_eq!(
            metadata
                .get::<String>("ScanScope ID")
                .expect("Failed to get metadata value"),
            Some("CPAPERIOCS".to_string())
        );

        assert_eq!(
            metadata
                .get::<String>("ScanScope I")
                .expect("Failed to get metadata value"),
            None
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_metadata_global(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        let metadata = reader
            .get_global_metadata()
            .expect("Failed to get series metadata");
        assert_eq!(
            &metadata.keys().expect(""),
            &[
                "PhotometricInterpretation",
                "PlanarConfiguration",
                "MetaDataPhotometricInterpretation",
                "Comment",
                "ImageLength",
                "NewSubfileType",
                "YCbCrSubSampling",
                "BitsPerSample",
                "Compression",
                "SamplesPerPixel",
                "NumberOfChannels",
                "TileByteCounts",
                "ImageWidth",
                "TileOffsets",
                "TileLength",
                "TileWidth"
            ]
            .into_iter()
            .map(|v| v.to_string())
            .collect::<Vec<_>>()
        );
    }

    #[rstest]
    #[case(image_reader())]
    fn test_metadata_global_value(#[case] reader: impl FormatReader, cmu_1_svs: &str) {
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        let metadata = reader
            .get_global_metadata()
            .expect("Failed to get series metadata");
        assert_eq!(
            metadata
                .get::<String>("MetaDataPhotometricInterpretation")
                .expect("Failed to get metadata value"),
            Some("RGB".to_string())
        );

        assert_eq!(
            metadata
                .get::<String>("Photometric")
                .expect("Failed to get metadata value"),
            None
        );
    }
}
