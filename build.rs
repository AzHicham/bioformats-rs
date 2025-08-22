use j4rs::{JvmBuilder, MavenArtifact, MavenArtifactRepo, MavenSettings, errors::J4RsError};
use retry::{delay::Exponential, retry};

fn main() -> anyhow::Result<()> {
    println!("cargo:rerun-if-changed=build.rs");

    Ok(retry(
        Exponential::from_millis(1000).take(4),
        deploy_java_artifacts,
    )?)
}

fn deploy_java_artifacts() -> Result<(), J4RsError> {
    let jvm = JvmBuilder::new()
        .with_maven_settings(MavenSettings::new(vec![MavenArtifactRepo::from(
            "openmicroscopy::https://artifacts.openmicroscopy.org/artifactory/ome.releases",
        )]))
        .build()?;

    jvm.deploy_artifact(&MavenArtifact::from("ome:bioformats_package:8.0.1"))?;

    #[cfg(feature = "gpl-formats")]
    jvm.deploy_artifact(&MavenArtifact::from("ome:formats-gpl:8.0.1"))?;

    Ok(())
}
