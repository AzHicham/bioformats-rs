window.BENCHMARK_DATA = {
  "lastUpdate": 1731398675544,
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
      }
    ]
  }
}