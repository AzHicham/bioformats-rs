window.BENCHMARK_DATA = {
  "lastUpdate": 1724849285822,
  "repoUrl": "https://github.com/AzHicham/bioformats-rs",
  "entries": {
    "bioformats-rs Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hicham.azimani1@gmail.com",
            "name": "Hicham Azimani",
            "username": "AzHicham"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8c5a657ee5bb23edaff6f3454f7db6e1a0441c8",
          "message": "ci: fix clippy & benchmark workflows (#2)",
          "timestamp": "2024-08-28T14:38:27+02:00",
          "tree_id": "64bb84752c598a645736d8cd8066106fa00d9ab3",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/d8c5a657ee5bb23edaff6f3454f7db6e1a0441c8"
        },
        "date": 1724849007391,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5991963,
            "range": "± 3578558",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 13192088,
            "range": "± 3922908",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 5465637,
            "range": "± 5466073",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 12167871,
            "range": "± 4334407",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 5741671,
            "range": "± 1766455",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 5445502,
            "range": "± 1683199",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 5418956,
            "range": "± 2006821",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 13300885,
            "range": "± 3679269",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 13505253,
            "range": "± 2758139",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 13283031,
            "range": "± 3914454",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani1@gmail.com",
            "name": "Hicham Azimani",
            "username": "AzHicham"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "d8c5a657ee5bb23edaff6f3454f7db6e1a0441c8",
          "message": "ci: fix clippy & benchmark workflows (#2)",
          "timestamp": "2024-08-28T14:38:27+02:00",
          "tree_id": "64bb84752c598a645736d8cd8066106fa00d9ab3",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/d8c5a657ee5bb23edaff6f3454f7db6e1a0441c8"
        },
        "date": 1724849285033,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5791190,
            "range": "± 3291039",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 12818129,
            "range": "± 5369726",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 5410019,
            "range": "± 3326259",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 12697359,
            "range": "± 2064090",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 5373448,
            "range": "± 1873048",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 5781144,
            "range": "± 2056733",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 5434216,
            "range": "± 2012096",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 13165484,
            "range": "± 2234930",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 13350886,
            "range": "± 3138691",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 13358053,
            "range": "± 4417218",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}