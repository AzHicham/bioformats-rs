use j4rs::{JvmBuilder, MavenArtifact, MavenArtifactRepo, MavenSettings};

fn main() {
    println!("cargo:rerun-if-changed=build.rs");

    let jvm = JvmBuilder::new()
        .with_maven_settings(MavenSettings::new(vec![MavenArtifactRepo::from(
            "openmicroscopy::https://artifacts.openmicroscopy.org/artifactory/ome.releases",
        )]))
        .build()
        .expect("Failed to build JVM");

    jvm.deploy_artifact(&MavenArtifact::from("ome:bioformats_package:7.3.1"))
        .expect("Failed to deploy artifact bioformats_package");

    #[cfg(feature = "gpl-formats")]
    jvm.deploy_artifact(&MavenArtifact::from("ome:formats-gpl:7.3.1"))
        .expect("Failed to deploy artifact formats-gpl");
}
