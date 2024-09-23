use j4rs::{errors::J4RsError, JvmBuilder, MavenArtifact, MavenArtifactRepo, MavenSettings};
use retry::{delay, delay::Exponential, retry};

fn main() -> anyhow::Result<()> {
    println!("cargo:rerun-if-changed=build.rs");

    Ok(retry(
        Exponential::from_millis(1000).map(delay::jitter).take(4),
        deploy_java_artifacts,
    )?)
}

fn deploy_java_artifacts() -> Result<(), J4RsError> {
    let jvm = JvmBuilder::new()
        .with_maven_settings(MavenSettings::new(vec![MavenArtifactRepo::from(
            "openmicroscopy::https://artifacts.openmicroscopy.org/artifactory/ome.releases",
        )]))
        .build()?;

    jvm.deploy_artifact(&MavenArtifact::from("ome:bioformats_package:7.3.1"))?;

    #[cfg(feature = "gpl-formats")]
    jvm.deploy_artifact(&MavenArtifact::from("ome:formats-gpl:7.3.1"))?;

    Ok(())
}
