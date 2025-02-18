window.BENCHMARK_DATA = {
  "lastUpdate": 1739895285705,
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
          "distinct": true,
          "id": "fa1411502d641f23d90a12a4f469c40cd89cab68",
          "message": "feat: add binding for metadata  (#3)",
          "timestamp": "2024-09-02T12:02:20+02:00",
          "tree_id": "6be0459bb71efad5114ee57469278772061af3ac",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/fa1411502d641f23d90a12a4f469c40cd89cab68"
        },
        "date": 1725271524462,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5999973,
            "range": "± 1982333",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 12681320,
            "range": "± 4222041",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 5468240,
            "range": "± 2075430",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 12239834,
            "range": "± 1457247",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 5449923,
            "range": "± 3130479",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 5414424,
            "range": "± 1951876",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 5549656,
            "range": "± 1572842",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 12135544,
            "range": "± 813311",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 12506688,
            "range": "± 2328501",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 12488751,
            "range": "± 2268817",
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
          "distinct": true,
          "id": "6b593ee054c6ddb4b2d1f0d5c6b64ee4579ba798",
          "message": "[Clippy] Code maintenance (#4)\n\nCo-authored-by: AzHicham <AzHicham@users.noreply.github.com>",
          "timestamp": "2024-09-02T12:10:41+02:00",
          "tree_id": "e0791ce9ca8574686767a7345e03a0f7acc4d807",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/6b593ee054c6ddb4b2d1f0d5c6b64ee4579ba798"
        },
        "date": 1725272040279,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5774028,
            "range": "± 2171361",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 12421375,
            "range": "± 1584135",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 5375010,
            "range": "± 1708975",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 11763928,
            "range": "± 1800582",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 5361594,
            "range": "± 1706865",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 5361769,
            "range": "± 1727226",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 5347835,
            "range": "± 1773185",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11962708,
            "range": "± 1724189",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11986677,
            "range": "± 1739353",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 12001274,
            "range": "± 1746632",
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
          "distinct": true,
          "id": "7653caf747c2b580981403ecf10b04d862868222",
          "message": "[Clippy] Code maintenance (#5)\n\nCo-authored-by: AzHicham <AzHicham@users.noreply.github.com>",
          "timestamp": "2024-09-02T12:18:46+02:00",
          "tree_id": "890aa0eb3e890502a122f1208ef08bd60f77389d",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/7653caf747c2b580981403ecf10b04d862868222"
        },
        "date": 1725272500384,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5816405,
            "range": "± 1495854",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 12370765,
            "range": "± 1794535",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 5387494,
            "range": "± 1595777",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 11718744,
            "range": "± 1643322",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 5359329,
            "range": "± 1744208",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 5341279,
            "range": "± 1716712",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 5337699,
            "range": "± 1729389",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11953267,
            "range": "± 1774852",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11935005,
            "range": "± 1622047",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11927967,
            "range": "± 1600709",
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
          "id": "7653caf747c2b580981403ecf10b04d862868222",
          "message": "[Clippy] Code maintenance (#5)\n\nCo-authored-by: AzHicham <AzHicham@users.noreply.github.com>",
          "timestamp": "2024-09-02T12:18:46+02:00",
          "tree_id": "890aa0eb3e890502a122f1208ef08bd60f77389d",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/7653caf747c2b580981403ecf10b04d862868222"
        },
        "date": 1725272716494,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5702459,
            "range": "± 3315764",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 12776881,
            "range": "± 2095938",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 5354342,
            "range": "± 719571",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 11881941,
            "range": "± 820790",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 5386107,
            "range": "± 2852266",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 5374882,
            "range": "± 2222966",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 5387954,
            "range": "± 1465352",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 12051527,
            "range": "± 2725781",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 12086953,
            "range": "± 2734160",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 12327527,
            "range": "± 1878711",
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
          "distinct": true,
          "id": "b650843b8e7a7c0ce3b2e02815c353d30594d2d0",
          "message": "fix: add retry in build.rs (#6)",
          "timestamp": "2024-09-23T17:57:30+02:00",
          "tree_id": "194ab3ffe71aa18b82f0f6bebe6002de09b22a31",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/b650843b8e7a7c0ce3b2e02815c353d30594d2d0"
        },
        "date": 1727107263750,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5902315,
            "range": "± 2376149",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 12506258,
            "range": "± 1665284",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 5400800,
            "range": "± 1786422",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 11810559,
            "range": "± 1759403",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 5361302,
            "range": "± 1816901",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 5343604,
            "range": "± 1752869",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 5347787,
            "range": "± 1705469",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 12117876,
            "range": "± 1596852",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 12149705,
            "range": "± 1638284",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 12128895,
            "range": "± 1646078",
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
          "distinct": true,
          "id": "d5e2d19ef329c48d0d2047a2df20ba844098ee75",
          "message": "[Clippy] Code maintenance (#7)\n\nCo-authored-by: AzHicham <AzHicham@users.noreply.github.com>",
          "timestamp": "2024-09-23T18:00:54+02:00",
          "tree_id": "20ea09d638858ef8d41beb413807f5774098f60f",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/d5e2d19ef329c48d0d2047a2df20ba844098ee75"
        },
        "date": 1727107443964,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5780625,
            "range": "± 1494835",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 12821754,
            "range": "± 1692345",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 5446169,
            "range": "± 641648",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 11882417,
            "range": "± 1058957",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 5402488,
            "range": "± 663652",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 5381380,
            "range": "± 1072231",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 5401635,
            "range": "± 817443",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 12099337,
            "range": "± 1248805",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 12154976,
            "range": "± 1602233",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 12481111,
            "range": "± 996342",
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
          "id": "d5e2d19ef329c48d0d2047a2df20ba844098ee75",
          "message": "[Clippy] Code maintenance (#7)\n\nCo-authored-by: AzHicham <AzHicham@users.noreply.github.com>",
          "timestamp": "2024-09-23T18:00:54+02:00",
          "tree_id": "20ea09d638858ef8d41beb413807f5774098f60f",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/d5e2d19ef329c48d0d2047a2df20ba844098ee75"
        },
        "date": 1727160492569,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5879342,
            "range": "± 1810392",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 12528164,
            "range": "± 1920047",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 5414258,
            "range": "± 1689231",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 11922269,
            "range": "± 1914246",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 5343549,
            "range": "± 1809866",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 5339349,
            "range": "± 1667879",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 5343850,
            "range": "± 1686536",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 12007083,
            "range": "± 1817971",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 12027797,
            "range": "± 1659910",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 12012320,
            "range": "± 1609273",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d695586d5a276c0dd97893eced093469b1462cf",
          "message": "chore(config): migrate renovate config (#9)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-11-11T12:50:17+01:00",
          "tree_id": "b6129ffdf9a5752275051ed229766321c75ddcbd",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/3d695586d5a276c0dd97893eced093469b1462cf"
        },
        "date": 1731326019939,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5832315,
            "range": "± 1346537",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 12543228,
            "range": "± 1477174",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 5460682,
            "range": "± 1520214",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 11942988,
            "range": "± 1512153",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 5409265,
            "range": "± 1693365",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 5391718,
            "range": "± 1673812",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 5398127,
            "range": "± 1828616",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 12207659,
            "range": "± 1691997",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 12251125,
            "range": "± 1370782",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 12222511,
            "range": "± 1163660",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa6c700bc474109fc3c06c6a555aa3b6a3bf6f01",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v39 (#10)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-11-11T12:55:49+01:00",
          "tree_id": "40f7ce911f21a8774a37cb4cce1e8fd976ddd76c",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/fa6c700bc474109fc3c06c6a555aa3b6a3bf6f01"
        },
        "date": 1731326343351,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5819860,
            "range": "± 1304009",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 12523666,
            "range": "± 1781606",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 5418207,
            "range": "± 1607648",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 11999447,
            "range": "± 1773125",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 5389548,
            "range": "± 1776992",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 5404304,
            "range": "± 1986462",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 5387669,
            "range": "± 1693755",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 12015587,
            "range": "± 2042900",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 12081932,
            "range": "± 1645159",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 12075623,
            "range": "± 2024671",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c16d498ce652cc7e49366a947ffd824a5fff5133",
          "message": "chore(deps): update pre-commit hook pre-commit/pre-commit-hooks to v5 (#15)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-11-12T09:00:19+01:00",
          "tree_id": "ab2da729d7c3689b95df0d2e2f84f3092547cdd3",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/c16d498ce652cc7e49366a947ffd824a5fff5133"
        },
        "date": 1731398601972,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5818343,
            "range": "± 1733547",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 12483261,
            "range": "± 1479823",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 5355494,
            "range": "± 1652536",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 11822350,
            "range": "± 2024433",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 5369181,
            "range": "± 1665015",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 5380597,
            "range": "± 1771800",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 5346524,
            "range": "± 1709069",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11984011,
            "range": "± 1694270",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11993257,
            "range": "± 1593532",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 12033597,
            "range": "± 1572992",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "46e4dc9b5c5c9b7e9075a3df6ccb25348a8b229b",
          "message": "chore(deps): update pre-commit hook pre-commit/pre-commit to v4 (#14)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-11-12T09:00:28+01:00",
          "tree_id": "69e77e29771e45ec11fdc2bab5230153079a843c",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/46e4dc9b5c5c9b7e9075a3df6ccb25348a8b229b"
        },
        "date": 1731398605921,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 6110924,
            "range": "± 2597530",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 12664895,
            "range": "± 4479344",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 5442751,
            "range": "± 905510",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 12036682,
            "range": "± 3617550",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 5438270,
            "range": "± 2638562",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 5432218,
            "range": "± 930024",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 5461628,
            "range": "± 1770600",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 12522492,
            "range": "± 2831555",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 12217032,
            "range": "± 2667887",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 12581802,
            "range": "± 1303912",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6add62fcd15a96b3e3d43c3cd2ef564b62d27c7c",
          "message": "chore(deps): update dependency ubuntu to v24 (#12)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-11-12T09:00:53+01:00",
          "tree_id": "815bfec571068c1592bad08548fa816693c391df",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/6add62fcd15a96b3e3d43c3cd2ef564b62d27c7c"
        },
        "date": 1731398675260,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5449046,
            "range": "± 1447180",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11544869,
            "range": "± 1549504",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4966736,
            "range": "± 1480068",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10780285,
            "range": "± 1871287",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4944287,
            "range": "± 1731940",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4936395,
            "range": "± 1913459",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4937733,
            "range": "± 1143884",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11152731,
            "range": "± 2022637",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11206508,
            "range": "± 1861400",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11236929,
            "range": "± 1907951",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abb2c075c16535edec32c4c20667c00644fcff11",
          "message": "chore(deps): update peter-evans/create-pull-request action to v7 (#13)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-11-12T09:00:37+01:00",
          "tree_id": "7e955d3efc55465524350ce24c8ee19ef3ba3f62",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/abb2c075c16535edec32c4c20667c00644fcff11"
        },
        "date": 1731398732770,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5851938,
            "range": "± 1406710",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 12543795,
            "range": "± 1627925",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 5436277,
            "range": "± 1513927",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 11887688,
            "range": "± 1688408",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 5396652,
            "range": "± 1704154",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 5367557,
            "range": "± 1802518",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 5374370,
            "range": "± 1710054",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 12222951,
            "range": "± 1693142",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 12227529,
            "range": "± 1691237",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 12208699,
            "range": "± 1846764",
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
          "distinct": true,
          "id": "efd3afeb73b72777e7b7abf987a0ceeb59d60d47",
          "message": "fix: major lib update + increase MSVR (#18)",
          "timestamp": "2024-11-12T17:00:21+01:00",
          "tree_id": "f99c5626df6e6403b6affa2b983bf0552c6b8091",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/efd3afeb73b72777e7b7abf987a0ceeb59d60d47"
        },
        "date": 1731427424305,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5058913,
            "range": "± 519391",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11042339,
            "range": "± 331566",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4859195,
            "range": "± 70794",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10640552,
            "range": "± 516799",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4886197,
            "range": "± 175366",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4901047,
            "range": "± 156397",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4931422,
            "range": "± 472072",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11016875,
            "range": "± 286921",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11028174,
            "range": "± 272455",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11016808,
            "range": "± 436774",
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
          "distinct": true,
          "id": "bf6eb369057677959ed85034292b115642faf254",
          "message": "ci: remove rust cache & audit workflow (#19)",
          "timestamp": "2024-11-15T09:12:36+01:00",
          "tree_id": "185cdda0a8243baf1fadc7bbfabe6232a72b2004",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/bf6eb369057677959ed85034292b115642faf254"
        },
        "date": 1731658527957,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5435692,
            "range": "± 1402399",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11399500,
            "range": "± 1936425",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4923074,
            "range": "± 995983",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10879446,
            "range": "± 2239096",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4937144,
            "range": "± 1114285",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4930154,
            "range": "± 1130150",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4954925,
            "range": "± 1353230",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11128917,
            "range": "± 1699140",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11089994,
            "range": "± 1598822",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11130345,
            "range": "± 2419002",
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
          "distinct": true,
          "id": "de9acd02e012497b119f37c5f9632d4bedaebba9",
          "message": "feat: upgrade java bioformats to v8.0.1 (#20)",
          "timestamp": "2024-11-15T09:38:10+01:00",
          "tree_id": "61c641fb0e8e10bc778b297a01e44e38344cf3e6",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/de9acd02e012497b119f37c5f9632d4bedaebba9"
        },
        "date": 1731660085931,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5727735,
            "range": "± 3835156",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11299511,
            "range": "± 1455586",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4897536,
            "range": "± 1039518",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10749637,
            "range": "± 2263198",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4912551,
            "range": "± 1188638",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4889784,
            "range": "± 1195753",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4915001,
            "range": "± 2341132",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11040985,
            "range": "± 2651208",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11017394,
            "range": "± 768580",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11135937,
            "range": "± 1749935",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "946834b238b113fb3162529c8091579b0d73a27b",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v39.19.1 (#21)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-11-18T12:32:10+01:00",
          "tree_id": "038f1bf64cdeab2f25869a2c142d8293fe16fe8f",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/946834b238b113fb3162529c8091579b0d73a27b"
        },
        "date": 1731929710205,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5207245,
            "range": "± 2743519",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11251217,
            "range": "± 1461701",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4880262,
            "range": "± 248983",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10676177,
            "range": "± 124863",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4897786,
            "range": "± 53009",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4915107,
            "range": "± 410984",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4898899,
            "range": "± 69039",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11001774,
            "range": "± 122723",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11004574,
            "range": "± 110870",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11003612,
            "range": "± 169126",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b347d5b1f6f21c8db94dd7466275c2585e84155",
          "message": "chore(deps): update codecov/codecov-action action to v5 (#22)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-11-18T12:32:22+01:00",
          "tree_id": "960a3c49045f2dce615439d6604ea23a0bd525f5",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/1b347d5b1f6f21c8db94dd7466275c2585e84155"
        },
        "date": 1731929739530,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5695163,
            "range": "± 3296667",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11710349,
            "range": "± 1946125",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4930173,
            "range": "± 1065056",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10787377,
            "range": "± 2378033",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4915589,
            "range": "± 1189645",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4902722,
            "range": "± 1232616",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4910278,
            "range": "± 1196509",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11096428,
            "range": "± 1198936",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11071578,
            "range": "± 1883786",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11074737,
            "range": "± 2269257",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "1b347d5b1f6f21c8db94dd7466275c2585e84155",
          "message": "chore(deps): update codecov/codecov-action action to v5 (#22)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-11-18T12:32:22+01:00",
          "tree_id": "960a3c49045f2dce615439d6604ea23a0bd525f5",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/1b347d5b1f6f21c8db94dd7466275c2585e84155"
        },
        "date": 1731930070018,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5710946,
            "range": "± 4271273",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11441320,
            "range": "± 1850456",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4919562,
            "range": "± 1037505",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10719980,
            "range": "± 2239785",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4893674,
            "range": "± 1194841",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4885819,
            "range": "± 1229916",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4893127,
            "range": "± 1227981",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11040232,
            "range": "± 1797353",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11082530,
            "range": "± 1838728",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11013898,
            "range": "± 2259155",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2433d037f07d1834461ae3bbed105ae497196e03",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v39.96.2 (#25)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-09T08:58:39+01:00",
          "tree_id": "51fda6442a5c6cc8f8b25f9d36232ff255ab44d5",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/2433d037f07d1834461ae3bbed105ae497196e03"
        },
        "date": 1736409697220,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5297029,
            "range": "± 1323466",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11272176,
            "range": "± 1091138",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4892861,
            "range": "± 110442",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10713918,
            "range": "± 143627",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4903455,
            "range": "± 46457",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4902081,
            "range": "± 247923",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4907569,
            "range": "± 99893",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11047227,
            "range": "± 206080",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11065852,
            "range": "± 270337",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11080737,
            "range": "± 428979",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ff7b05ece3a1e32863a123969ec3a902fdd7a0a",
          "message": "fix(deps): update cargo (#24)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-09T09:59:53+01:00",
          "tree_id": "719327322c605e1235ae8e0f120b1f5ca9c0e7f5",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/4ff7b05ece3a1e32863a123969ec3a902fdd7a0a"
        },
        "date": 1736413363564,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5414551,
            "range": "± 3071764",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11500470,
            "range": "± 1482399",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4910948,
            "range": "± 263598",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10917866,
            "range": "± 1157268",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4988234,
            "range": "± 247307",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 5001997,
            "range": "± 164986",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4986661,
            "range": "± 76525",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11241281,
            "range": "± 275736",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11238339,
            "range": "± 137284",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11231095,
            "range": "± 249054",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7cfa06d97efea6dcfa5fcebe9fca55772ec5979",
          "message": "fix(deps): update cargo (#26)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-18T17:06:56+01:00",
          "tree_id": "900863a0f4177b0eb10881e5a20e50d31618a125",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/e7cfa06d97efea6dcfa5fcebe9fca55772ec5979"
        },
        "date": 1739894982822,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5441847,
            "range": "± 2651079",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11222233,
            "range": "± 1081553",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4873061,
            "range": "± 244786",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10663629,
            "range": "± 1035495",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4889295,
            "range": "± 147572",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4886989,
            "range": "± 60594",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4893518,
            "range": "± 49488",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 10990513,
            "range": "± 88251",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 10998518,
            "range": "± 138743",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11004603,
            "range": "± 688167",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "241f58e9bcba0f35f9e39166a0b338b4ae0617bc",
          "message": "chore(deps): update pre-commit (#27)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-18T17:11:53+01:00",
          "tree_id": "da4ae6c322c70c9a53cbd9635b5b5b635fdcc394",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/241f58e9bcba0f35f9e39166a0b338b4ae0617bc"
        },
        "date": 1739895285350,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5307734,
            "range": "± 2065803",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11487008,
            "range": "± 993853",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4913311,
            "range": "± 269045",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10825673,
            "range": "± 572335",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4935801,
            "range": "± 109473",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4947196,
            "range": "± 97101",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4948251,
            "range": "± 142303",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11150541,
            "range": "± 227227",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11148293,
            "range": "± 305314",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11166032,
            "range": "± 243697",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}