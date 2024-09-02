use crate::bindings::{error::BindingError, utils::is_null};
use j4rs::{Instance, InvocationArg, Jvm};
use std::borrow::Borrow;

pub struct OmeXmlMetadata<J: Borrow<Jvm>> {
    jvm: J,
    pub(crate) inner: Instance,
}

impl<J: Borrow<Jvm>> OmeXmlMetadata<J> {
    pub fn new(jvm: J) -> Result<Self, BindingError> {
        let inner = jvm.borrow().invoke_static(
            "loci.formats.MetadataTools",
            "createOMEXMLMetadata",
            InvocationArg::empty(),
        )?;
        Ok(Self { jvm, inner })
    }

    pub(crate) fn new_with_instance(jvm: J, inner: Instance) -> Self {
        Self { jvm, inner }
    }

    pub fn get_physical_size_x(&self, image: i32) -> Result<Option<(f32, String)>, BindingError> {
        let jvm = self.jvm.borrow();
        let res = jvm.invoke(
            &self.inner,
            "getPixelsPhysicalSizeX",
            &[InvocationArg::try_from(image)?.into_primitive()?],
        )?;
        java_to_rust_length(jvm, res)
    }

    pub fn get_physical_size_y(&self, image: i32) -> Result<Option<(f32, String)>, BindingError> {
        let jvm = self.jvm.borrow();
        let res = jvm.invoke(
            &self.inner,
            "getPixelsPhysicalSizeY",
            &[InvocationArg::try_from(image)?.into_primitive()?],
        )?;
        java_to_rust_length(jvm, res)
    }

    pub fn get_physical_size_z(&self, image: i32) -> Result<Option<(f32, String)>, BindingError> {
        let jvm = self.jvm.borrow();
        let res = jvm.invoke(
            &self.inner,
            "getPixelsPhysicalSizeZ",
            &[InvocationArg::try_from(image)?.into_primitive()?],
        )?;
        java_to_rust_length(jvm, res)
    }

    pub fn get_microscope_manufacturer(&self, image: i32) -> Result<Option<String>, BindingError> {
        let jvm = self.jvm.borrow();
        let res = jvm.invoke(
            &self.inner,
            "getMicroscopeManufacturer",
            &[InvocationArg::try_from(image)?.into_primitive()?],
        )?;
        if is_null(jvm, &res)? {
            Ok(None)
        } else {
            Ok(Some(jvm.to_rust(res)?))
        }
    }

    pub fn get_microscope_model(&self, image: i32) -> Result<Option<String>, BindingError> {
        let jvm = self.jvm.borrow();
        let res = jvm.invoke(
            &self.inner,
            "getMicroscopeModel",
            &[InvocationArg::try_from(image)?.into_primitive()?],
        )?;
        if is_null(jvm, &res)? {
            Ok(None)
        } else {
            Ok(Some(jvm.to_rust(res)?))
        }
    }

    pub fn get_microscope_serial_number(&self, image: i32) -> Result<Option<String>, BindingError> {
        let jvm = self.jvm.borrow();
        let res = jvm.invoke(
            &self.inner,
            "getMicroscopeSerialNumber",
            &[InvocationArg::try_from(image)?.into_primitive()?],
        )?;
        if is_null(jvm, &res)? {
            Ok(None)
        } else {
            Ok(Some(jvm.to_rust(res)?))
        }
    }

    pub fn get_detector_count(&self, image: i32) -> Result<Option<i32>, BindingError> {
        let jvm = self.jvm.borrow();
        let res = jvm.invoke(
            &self.inner,
            "getDetectorCount",
            &[InvocationArg::try_from(image)?.into_primitive()?],
        )?;
        if is_null(jvm, &res)? {
            Ok(None)
        } else {
            Ok(Some(jvm.to_rust(res)?))
        }
    }

    pub fn get_detector_serial_number(
        &self,
        image: i32,
        detector: i32,
    ) -> Result<Option<String>, BindingError> {
        let jvm = self.jvm.borrow();
        let res = jvm.invoke(
            &self.inner,
            "getDetectorSerialNumber",
            &[
                InvocationArg::try_from(image)?.into_primitive()?,
                InvocationArg::try_from(detector)?.into_primitive()?,
            ],
        )?;
        if is_null(jvm, &res)? {
            Ok(None)
        } else {
            Ok(Some(jvm.to_rust(res)?))
        }
    }

    pub fn get_detector_model(
        &self,
        image: i32,
        detector: i32,
    ) -> Result<Option<String>, BindingError> {
        let jvm = self.jvm.borrow();
        let res = jvm.invoke(
            &self.inner,
            "getDetectorModel",
            &[
                InvocationArg::try_from(image)?.into_primitive()?,
                InvocationArg::try_from(detector)?.into_primitive()?,
            ],
        )?;
        if is_null(jvm, &res)? {
            Ok(None)
        } else {
            Ok(Some(jvm.to_rust(res)?))
        }
    }

    pub fn get_detector_manufacturer(
        &self,
        image: i32,
        detector: i32,
    ) -> Result<Option<String>, BindingError> {
        let jvm = self.jvm.borrow();
        let res = jvm.invoke(
            &self.inner,
            "getDetectorManufacturer",
            &[
                InvocationArg::try_from(image)?.into_primitive()?,
                InvocationArg::try_from(detector)?.into_primitive()?,
            ],
        )?;
        if is_null(jvm, &res)? {
            Ok(None)
        } else {
            Ok(Some(jvm.to_rust(res)?))
        }
    }

    // TODO: Impl more methods here is the full list:
    // getArcAnnotationRef, getArcID, getArcLotNumber, getArcManufacturer, getArcModel, getArcPower, getArcSerialNumber, getArcType, getBinaryFileBinData, getBinaryFileBinDataBigEndian, getBinaryFileBinDataCompression, getBinaryFileBinDataLength, getBinaryFileFileName, getBinaryFileMIMEType, getBinaryFileSize, getBinaryOnlyMetadataFile, getBinaryOnlyUUID, getBooleanAnnotationAnnotationCount, getBooleanAnnotationAnnotationRef, getBooleanAnnotationAnnotator, getBooleanAnnotationCount, getBooleanAnnotationDescription, getBooleanAnnotationID, getBooleanAnnotationNamespace, getBooleanAnnotationValue, getChannelAcquisitionMode, getChannelAnnotationRef, getChannelAnnotationRefCount, getChannelColor, getChannelContrastMethod, getChannelCount, getChannelEmissionWavelength, getChannelExcitationWavelength, getChannelFilterSetRef, getChannelFluor, getChannelID, getChannelIlluminationType, getChannelLightSourceSettingsAttenuation, getChannelLightSourceSettingsID, getChannelLightSourceSettingsWavelength, getChannelName, getChannelNDFilter, getChannelPinholeSize, getChannelPockelCellSetting, getChannelSamplesPerPixel, getCommentAnnotationAnnotationCount, getCommentAnnotationAnnotationRef, getCommentAnnotationAnnotator, getCommentAnnotationCount, getCommentAnnotationDescription, getCommentAnnotationID, getCommentAnnotationNamespace, getCommentAnnotationValue, getCreator, getDatasetAnnotationRef, getDatasetAnnotationRefCount, getDatasetCount, getDatasetDescription, getDatasetExperimenterGroupRef, getDatasetExperimenterRef, getDatasetID, getDatasetImageRef, getDatasetImageRefCount, getDatasetName, getDatasetRefCount, getDetectorAmplificationGain, getDetectorAnnotationRef, getDetectorAnnotationRefCount, getDetectorCount, getDetectorGain, getDetectorID, getDetectorLotNumber, getDetectorManufacturer, getDetectorModel, getDetectorOffset, getDetectorSerialNumber, getDetectorSettingsBinning, getDetectorSettingsGain, getDetectorSettingsID, getDetectorSettingsIntegration, getDetectorSettingsOffset, getDetectorSettingsReadOutRate, getDetectorSettingsVoltage, getDetectorSettingsZoom, getDetectorType, getDetectorVoltage, getDetectorZoom, getDichroicAnnotationRef, getDichroicAnnotationRefCount, getDichroicCount, getDichroicID, getDichroicLotNumber, getDichroicManufacturer, getDichroicModel, getDichroicSerialNumber, getDoubleAnnotationAnnotationCount, getDoubleAnnotationAnnotationRef, getDoubleAnnotationAnnotator, getDoubleAnnotationCount, getDoubleAnnotationDescription, getDoubleAnnotationID, getDoubleAnnotationNamespace, getDoubleAnnotationValue, getEllipseAnnotationRef, getEllipseFillColor, getEllipseFillRule, getEllipseFontFamily, getEllipseFontSize, getEllipseFontStyle, getEllipseID, getEllipseLocked, getEllipseRadiusX, getEllipseRadiusY, getEllipseStrokeColor, getEllipseStrokeDashArray, getEllipseStrokeWidth, getEllipseText, getEllipseTheC, getEllipseTheT, getEllipseTheZ, getEllipseTransform, getEllipseX, getEllipseY, getExperimentCount, getExperimentDescription, getExperimenterAnnotationRef, getExperimenterAnnotationRefCount, getExperimenterCount, getExperimenterEmail, getExperimenterFirstName, getExperimenterGroupAnnotationRef, getExperimenterGroupAnnotationRefCount, getExperimenterGroupCount, getExperimenterGroupDescription, getExperimenterGroupExperimenterRef, getExperimenterGroupExperimenterRefCount, getExperimenterGroupID, getExperimenterGroupLeader, getExperimenterGroupName, getExperimenterID, getExperimenterInstitution, getExperimenterLastName, getExperimenterMiddleName, getExperimenterUserName, getExperimentExperimenterRef, getExperimentID, getExperimentType, getFilamentAnnotationRef, getFilamentID, getFilamentLotNumber, getFilamentManufacturer, getFilamentModel, getFilamentPower, getFilamentSerialNumber, getFilamentType, getFileAnnotationAnnotationCount, getFileAnnotationAnnotationRef, getFileAnnotationAnnotator, getFileAnnotationCount, getFileAnnotationDescription, getFileAnnotationID, getFileAnnotationNamespace, getFilterAnnotationRef, getFilterAnnotationRefCount, getFilterCount, getFilterFilterWheel, getFilterID, getFilterLotNumber, getFilterManufacturer, getFilterModel, getFilterSerialNumber, getFilterSetCount, getFilterSetDichroicRef, getFilterSetEmissionFilterRef, getFilterSetEmissionFilterRefCount, getFilterSetExcitationFilterRef, getFilterSetExcitationFilterRefCount, getFilterSetID, getFilterSetLotNumber, getFilterSetManufacturer, getFilterSetModel, getFilterSetSerialNumber, getFilterType, getFolderAnnotationRef, getFolderAnnotationRefCount, getFolderCount, getFolderDescription, getFolderFolderRef, getFolderID, getFolderImageRef, getFolderImageRefCount, getFolderName, getFolderRefCount, getFolderROIRef, getFolderROIRefCount, getGenericExcitationSourceAnnotationRef, getGenericExcitationSourceID, getGenericExcitationSourceLotNumber, getGenericExcitationSourceManufacturer, getGenericExcitationSourceMap, getGenericExcitationSourceModel, getGenericExcitationSourcePower, getGenericExcitationSourceSerialNumber, getImageAcquisitionDate, getImageAnnotationRef, getImageAnnotationRefCount, getImageCount, getImageDescription, getImageExperimenterGroupRef, getImageExperimenterRef, getImageExperimentRef, getImageID, getImageInstrumentRef, getImageMicrobeamManipulationRef, getImageName, getImageROIRef, getImageROIRefCount, getImagingEnvironmentAirPressure, getImagingEnvironmentCO2Percent, getImagingEnvironmentHumidity, getImagingEnvironmentMap, getImagingEnvironmentTemperature, getInstrumentAnnotationRef, getInstrumentAnnotationRefCount, getInstrumentCount, getInstrumentID, getLabelAnnotationRef, getLabelFillColor, getLabelFillRule, getLabelFontFamily, getLabelFontSize, getLabelFontStyle, getLabelID, getLabelLocked, getLabelStrokeColor, getLabelStrokeDashArray, getLabelStrokeWidth, getLabelText, getLabelTheC, getLabelTheT, getLabelTheZ, getLabelTransform, getLabelX, getLabelY, getLaserAnnotationRef, getLaserFrequencyMultiplication, getLaserID, getLaserLaserMedium, getLaserLotNumber, getLaserManufacturer, getLaserModel, getLaserPockelCell, getLaserPower, getLaserPulse, getLaserPump, getLaserRepetitionRate, getLaserSerialNumber, getLaserTuneable, getLaserType, getLaserWavelength, getLeaderCount, getLightEmittingDiodeAnnotationRef, getLightEmittingDiodeID, getLightEmittingDiodeLotNumber, getLightEmittingDiodeManufacturer, getLightEmittingDiodeModel, getLightEmittingDiodePower, getLightEmittingDiodeSerialNumber, getLightPathAnnotationRef, getLightPathAnnotationRefCount, getLightPathDichroicRef, getLightPathEmissionFilterRef, getLightPathEmissionFilterRefCount, getLightPathExcitationFilterRef, getLightPathExcitationFilterRefCount, getLightSourceAnnotationRefCount, getLightSourceCount, getLightSourceType, getLineAnnotationRef, getLineFillColor, getLineFillRule, getLineFontFamily, getLineFontSize, getLineFontStyle, getLineID, getLineLocked, getLineMarkerEnd, getLineMarkerStart, getLineStrokeColor, getLineStrokeDashArray, getLineStrokeWidth, getLineText, getLineTheC, getLineTheT, getLineTheZ, getLineTransform, getLineX1, getLineX2, getLineY1, getLineY2, getListAnnotationAnnotationCount, getListAnnotationAnnotationRef, getListAnnotationAnnotator, getListAnnotationCount, getListAnnotationDescription, getListAnnotationID, getListAnnotationNamespace, getLongAnnotationAnnotationCount, getLongAnnotationAnnotationRef, getLongAnnotationAnnotator, getLongAnnotationCount, getLongAnnotationDescription, getLongAnnotationID, getLongAnnotationNamespace, getLongAnnotationValue, getMapAnnotationAnnotationCount, getMapAnnotationAnnotationRef, getMapAnnotationAnnotator, getMapAnnotationCount, getMapAnnotationDescription, getMapAnnotationID, getMapAnnotationNamespace, getMapAnnotationValue, getMaskAnnotationRef, getMaskBinData, getMaskBinDataBigEndian, getMaskBinDataCompression, getMaskBinDataLength, getMaskFillColor, getMaskFillRule, getMaskFontFamily, getMaskFontSize, getMaskFontStyle, getMaskHeight, getMaskID, getMaskLocked, getMaskStrokeColor, getMaskStrokeDashArray, getMaskStrokeWidth, getMaskText, getMaskTheC, getMaskTheT, getMaskTheZ, getMaskTransform, getMaskWidth, getMaskX, getMaskY, getMicrobeamManipulationCount, getMicrobeamManipulationDescription, getMicrobeamManipulationExperimenterRef, getMicrobeamManipulationID, getMicrobeamManipulationLightSourceSettingsAttenuation, getMicrobeamManipulationLightSourceSettingsCount, getMicrobeamManipulationLightSourceSettingsID, getMicrobeamManipulationLightSourceSettingsWavelength, getMicrobeamManipulationRefCount, getMicrobeamManipulationROIRef, getMicrobeamManipulationROIRefCount, getMicrobeamManipulationType, getMicroscopeLotNumber, getMicroscopeManufacturer, getMicroscopeModel, getMicroscopeSerialNumber, getMicroscopeType, getObjectiveAnnotationRef, getObjectiveAnnotationRefCount, getObjectiveCalibratedMagnification, getObjectiveCorrection, getObjectiveCount, getObjectiveID, getObjectiveImmersion, getObjectiveIris, getObjectiveLensNA, getObjectiveLotNumber, getObjectiveManufacturer, getObjectiveModel, getObjectiveNominalMagnification, getObjectiveSerialNumber, getObjectiveSettingsCorrectionCollar, getObjectiveSettingsID, getObjectiveSettingsMedium, getObjectiveSettingsRefractiveIndex, getObjectiveWorkingDistance, getPixelsBigEndian, getPixelsBinData, getPixelsBinDataBigEndian, getPixelsBinDataCompression, getPixelsBinDataCount, getPixelsBinDataLength, getPixelsDimensionOrder, getPixelsID, getPixelsInterleaved, getPixelsPhysicalSizeX, getPixelsPhysicalSizeY, getPixelsPhysicalSizeZ, getPixelsSignificantBits, getPixelsSizeC, getPixelsSizeT, getPixelsSizeX, getPixelsSizeY, getPixelsSizeZ, getPixelsTimeIncrement, getPixelsType, getPlaneAnnotationRef, getPlaneAnnotationRefCount, getPlaneCount, getPlaneDeltaT, getPlaneExposureTime, getPlaneHashSHA1, getPlanePositionX, getPlanePositionY, getPlanePositionZ, getPlaneTheC, getPlaneTheT, getPlaneTheZ, getPlateAcquisitionAnnotationRef, getPlateAcquisitionAnnotationRefCount, getPlateAcquisitionCount, getPlateAcquisitionDescription, getPlateAcquisitionEndTime, getPlateAcquisitionID, getPlateAcquisitionMaximumFieldCount, getPlateAcquisitionName, getPlateAcquisitionStartTime, getPlateAcquisitionWellSampleRef, getPlateAnnotationRef, getPlateAnnotationRefCount, getPlateColumnNamingConvention, getPlateColumns, getPlateCount, getPlateDescription, getPlateExternalIdentifier, getPlateFieldIndex, getPlateID, getPlateName, getPlateRefCount, getPlateRowNamingConvention, getPlateRows, getPlateStatus, getPlateWellOriginX, getPlateWellOriginY, getPointAnnotationRef, getPointFillColor, getPointFillRule, getPointFontFamily, getPointFontSize, getPointFontStyle, getPointID, getPointLocked, getPointStrokeColor, getPointStrokeDashArray, getPointStrokeWidth, getPointText, getPointTheC, getPointTheT, getPointTheZ, getPointTransform, getPointX, getPointY, getPolygonAnnotationRef, getPolygonFillColor, getPolygonFillRule, getPolygonFontFamily, getPolygonFontSize, getPolygonFontStyle, getPolygonID, getPolygonLocked, getPolygonPoints, getPolygonStrokeColor, getPolygonStrokeDashArray, getPolygonStrokeWidth, getPolygonText, getPolygonTheC, getPolygonTheT, getPolygonTheZ, getPolygonTransform, getPolylineAnnotationRef, getPolylineFillColor, getPolylineFillRule, getPolylineFontFamily, getPolylineFontSize, getPolylineFontStyle, getPolylineID, getPolylineLocked, getPolylineMarkerEnd, getPolylineMarkerStart, getPolylinePoints, getPolylineStrokeColor, getPolylineStrokeDashArray, getPolylineStrokeWidth, getPolylineText, getPolylineTheC, getPolylineTheT, getPolylineTheZ, getPolylineTransform, getProjectAnnotationRef, getProjectAnnotationRefCount, getProjectCount, getProjectDatasetRef, getProjectDescription, getProjectExperimenterGroupRef, getProjectExperimenterRef, getProjectID, getProjectName, getReagentAnnotationRef, getReagentAnnotationRefCount, getReagentCount, getReagentDescription, getReagentID, getReagentName, getReagentReagentIdentifier, getRectangleAnnotationRef, getRectangleFillColor, getRectangleFillRule, getRectangleFontFamily, getRectangleFontSize, getRectangleFontStyle, getRectangleHeight, getRectangleID, getRectangleLocked, getRectangleStrokeColor, getRectangleStrokeDashArray, getRectangleStrokeWidth, getRectangleText, getRectangleTheC, getRectangleTheT, getRectangleTheZ, getRectangleTransform, getRectangleWidth, getRectangleX, getRectangleY, getRightsRightsHeld, getRightsRightsHolder, getROIAnnotationRef, getROIAnnotationRefCount, getROICount, getROIDescription, getROIID, getROIName, getScreenAnnotationRef, getScreenAnnotationRefCount, getScreenCount, getScreenDescription, getScreenID, getScreenName, getScreenPlateRef, getScreenProtocolDescription, getScreenProtocolIdentifier, getScreenReagentSetDescription, getScreenReagentSetIdentifier, getScreenType, getShapeAnnotationRefCount, getShapeCount, getShapeType, getStageLabelName, getStageLabelX, getStageLabelY, getStageLabelZ, getTagAnnotationAnnotationCount, getTagAnnotationAnnotationRef, getTagAnnotationAnnotator, getTagAnnotationCount, getTagAnnotationDescription, getTagAnnotationID, getTagAnnotationNamespace, getTagAnnotationValue, getTermAnnotationAnnotationCount, getTermAnnotationAnnotationRef, getTermAnnotationAnnotator, getTermAnnotationCount, getTermAnnotationDescription, getTermAnnotationID, getTermAnnotationNamespace, getTermAnnotationValue, getTiffDataCount, getTiffDataFirstC, getTiffDataFirstT, getTiffDataFirstZ, getTiffDataIFD, getTiffDataPlaneCount, getTimestampAnnotationAnnotationCount, getTimestampAnnotationAnnotationRef, getTimestampAnnotationAnnotator, getTimestampAnnotationCount, getTimestampAnnotationDescription, getTimestampAnnotationID, getTimestampAnnotationNamespace, getTimestampAnnotationValue, getTransmittanceRangeCutIn, getTransmittanceRangeCutInTolerance, getTransmittanceRangeCutOut, getTransmittanceRangeCutOutTolerance, getTransmittanceRangeTransmittance, getUUID, getUUIDFileName, getUUIDValue, getWellAnnotationRef, getWellAnnotationRefCount, getWellColor, getWellColumn, getWellCount, getWellExternalDescription, getWellExternalIdentifier, getWellID, getWellReagentRef, getWellRow, getWellSampleCount, getWellSampleID, getWellSampleImageRef, getWellSampleIndex, getWellSamplePositionX, getWellSamplePositionY, getWellSampleRefCount, getWellSampleTimepoint, getWellType, getXMLAnnotationAnnotationCount, getXMLAnnotationAnnotationRef, getXMLAnnotationAnnotator, getXMLAnnotationCount, getXMLAnnotationDescription, getXMLAnnotationID, getXMLAnnotationNamespace, getXMLAnnotationValue
}

fn java_to_rust_length(
    jvm: &Jvm,
    instance: Instance,
) -> Result<Option<(f32, String)>, BindingError> {
    let is_null = is_null(jvm, &instance)?;
    if is_null {
        Ok(None)
    } else {
        let value = jvm.invoke(&instance, "value", InvocationArg::empty())?;
        let value: f32 = jvm.to_rust(value)?;
        let unit = jvm.invoke(&instance, "unit", InvocationArg::empty())?;
        let unit = jvm.invoke(&unit, "getSymbol", InvocationArg::empty())?;
        let unit: String = jvm.to_rust(unit)?;
        Ok(Some((value, unit)))
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::{
        bindings::reader::FormatReader,
        fixture::{cmu_1_svs, image_reader, jvm},
    };
    use rstest::rstest;

    #[rstest]
    #[case(image_reader())]
    fn test_get_physical_size(#[case] reader: impl FormatReader, cmu_1_svs: &str, jvm: Jvm) {
        let meta = OmeXmlMetadata::new(jvm).expect("Failed to create OmeXmlMetadata");
        reader
            .set_metadata_store(meta)
            .expect("Failed to set metadata store");
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        let meta = reader
            .get_metadata_store()
            .expect("Failed to set metadata store");
        assert_eq!(
            meta.get_physical_size_x(0).unwrap(),
            Some((0.499, "µm".to_string()))
        );
        assert_eq!(
            meta.get_physical_size_y(0).unwrap(),
            Some((0.499, "µm".to_string()))
        );
        assert_eq!(meta.get_physical_size_z(0).unwrap(), None);
    }

    #[rstest]
    #[case(image_reader())]
    fn test_microscope_info(#[case] reader: impl FormatReader, cmu_1_svs: &str, jvm: Jvm) {
        let meta = OmeXmlMetadata::new(jvm).expect("Failed to create OmeXmlMetadata");
        reader
            .set_metadata_store(meta)
            .expect("Failed to set metadata store");
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        let meta = reader
            .get_metadata_store()
            .expect("Failed to set metadata store");

        assert!(meta.get_microscope_serial_number(0).is_err());
    }

    #[rstest]
    #[case(image_reader())]
    fn test_detector_info(#[case] reader: impl FormatReader, cmu_1_svs: &str, jvm: Jvm) {
        let meta = OmeXmlMetadata::new(jvm).expect("Failed to create OmeXmlMetadata");
        reader
            .set_metadata_store(meta)
            .expect("Failed to set metadata store");
        let () = reader.set_id(cmu_1_svs).expect("Failed to open file");
        let meta = reader
            .get_metadata_store()
            .expect("Failed to set metadata store");

        assert_eq!(
            meta.get_detector_count(0)
                .expect("Cannot Get detector count"),
            Some(0)
        );

        assert!(meta.get_detector_serial_number(0, 0).is_err());
    }
}
