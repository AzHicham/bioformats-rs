window.BENCHMARK_DATA = {
  "lastUpdate": 1756106399363,
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
          "id": "70d2d0c0dd174a03990eb8a87914f77e7f933e65",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v39.185.9 (#29)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-10T08:45:13+01:00",
          "tree_id": "072bcdcad20a60bddaed0b163749d1e6ec6b3dd5",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/70d2d0c0dd174a03990eb8a87914f77e7f933e65"
        },
        "date": 1741592875795,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5282769,
            "range": "± 1389026",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11249718,
            "range": "± 557379",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4916707,
            "range": "± 229698",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10737985,
            "range": "± 1108769",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4908935,
            "range": "± 70182",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4909983,
            "range": "± 132866",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4899756,
            "range": "± 56006",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11021145,
            "range": "± 408896",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11037252,
            "range": "± 406734",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11035296,
            "range": "± 121410",
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
          "id": "54a211e54334cc7c6325ba520c99beb7cf5e299c",
          "message": "fix(deps): update cargo (#28)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-10T08:45:04+01:00",
          "tree_id": "72461b13621cc59af3eadea7ee1b74c22e6d9e42",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/54a211e54334cc7c6325ba520c99beb7cf5e299c"
        },
        "date": 1741592911795,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5737161,
            "range": "± 3727744",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11341393,
            "range": "± 1318838",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4974585,
            "range": "± 1830236",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10753182,
            "range": "± 2042748",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4915504,
            "range": "± 1245666",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4914476,
            "range": "± 1249511",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4923648,
            "range": "± 1938705",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11071807,
            "range": "± 2806558",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11115397,
            "range": "± 2629761",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11164576,
            "range": "± 1086586",
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
          "id": "a01ceb961ac2ed1b85d525e861c77420c7c1bb99",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v39.205.1 (#31)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-17T08:53:38+01:00",
          "tree_id": "57b8615c472f422e63bedf3e918381356a970ea2",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/a01ceb961ac2ed1b85d525e861c77420c7c1bb99"
        },
        "date": 1742198186020,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5191745,
            "range": "± 1173117",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11315298,
            "range": "± 853456",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4892306,
            "range": "± 259129",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10724502,
            "range": "± 238418",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4911225,
            "range": "± 98140",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4925271,
            "range": "± 95854",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4917895,
            "range": "± 69773",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11097876,
            "range": "± 166449",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11065253,
            "range": "± 298899",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11047659,
            "range": "± 226171",
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
          "id": "4a2a3e4b0dd2f87c6f0f12e14658f79653c980fb",
          "message": "chore(deps): update dependency python to 3.13 (#30)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-17T09:00:53+01:00",
          "tree_id": "dfd12bc946a9e8428b3b4346a109bf6da3ecec11",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/4a2a3e4b0dd2f87c6f0f12e14658f79653c980fb"
        },
        "date": 1742198611953,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5286741,
            "range": "± 2123549",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11343145,
            "range": "± 2397208",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4889323,
            "range": "± 247667",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10745088,
            "range": "± 515630",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4937417,
            "range": "± 271579",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4897994,
            "range": "± 63574",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4913140,
            "range": "± 61463",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11054091,
            "range": "± 251398",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11032976,
            "range": "± 197638",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11037992,
            "range": "± 213339",
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
          "id": "f28592622b4a11babe16e1ea8f88725d85ffad6d",
          "message": "chore(deps): update pre-commit (#33)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T09:17:33+02:00",
          "tree_id": "795bd9a9310c7c48b25895146e5c1282b32ef0e1",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/f28592622b4a11babe16e1ea8f88725d85ffad6d"
        },
        "date": 1743405614328,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5505757,
            "range": "± 2723693",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11418718,
            "range": "± 668960",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4971878,
            "range": "± 174765",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10869329,
            "range": "± 357435",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4970197,
            "range": "± 200011",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4987805,
            "range": "± 405844",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4997885,
            "range": "± 264111",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11185633,
            "range": "± 435527",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11237385,
            "range": "± 426367",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11174747,
            "range": "± 344159",
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
          "id": "b79bfc32472f4188130b7e14c89505b94fc7a22f",
          "message": "fix(deps): update cargo (#32)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T09:17:56+02:00",
          "tree_id": "95b926317ae2f64e0ca1127259d7526f5ddc5541",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/b79bfc32472f4188130b7e14c89505b94fc7a22f"
        },
        "date": 1743405719300,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 6332266,
            "range": "± 3938440",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11353248,
            "range": "± 2576451",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4909511,
            "range": "± 1056737",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10735506,
            "range": "± 2342983",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4909467,
            "range": "± 1240534",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4910233,
            "range": "± 1317417",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4915918,
            "range": "± 1254435",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11354331,
            "range": "± 1729255",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11139637,
            "range": "± 1557830",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11143302,
            "range": "± 2437438",
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
          "id": "a239bb289b8bb4f9b0b9a9e522832f593bc4d870",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v39.257.3 (#35)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-24T06:58:11+02:00",
          "tree_id": "97e51b0dc1f52d13c2c53667a56d96ec681bd74a",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/a239bb289b8bb4f9b0b9a9e522832f593bc4d870"
        },
        "date": 1745470851115,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5244114,
            "range": "± 2715326",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11217642,
            "range": "± 346207",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4895161,
            "range": "± 68253",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10696776,
            "range": "± 131816",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4915243,
            "range": "± 107405",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4912123,
            "range": "± 83974",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4910646,
            "range": "± 207051",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11011663,
            "range": "± 80603",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11031422,
            "range": "± 493954",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11035654,
            "range": "± 397379",
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
          "id": "4e48aa2b80e2e48f9cadc7756175b9d8d533a7f1",
          "message": "fix(deps): update cargo (#34)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-24T06:58:42+02:00",
          "tree_id": "4e6e23a52e140b5301cbcf2ccbe22d6b922d2eaf",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/4e48aa2b80e2e48f9cadc7756175b9d8d533a7f1"
        },
        "date": 1745470933685,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5411489,
            "range": "± 3603635",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11353874,
            "range": "± 2025025",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4913932,
            "range": "± 1040051",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10761225,
            "range": "± 2169539",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4952172,
            "range": "± 1262683",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4928180,
            "range": "± 1082785",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4929115,
            "range": "± 1383211",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11116219,
            "range": "± 2220543",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11107084,
            "range": "± 827102",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11121077,
            "range": "± 1572837",
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
          "id": "462b1d5a65859b7f7a221eb647a72a8e29e3154b",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v40 (#37)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-05-07T06:55:11+02:00",
          "tree_id": "7364ad6fc12c41460c4ca02240a62bacf236bf5a",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/462b1d5a65859b7f7a221eb647a72a8e29e3154b"
        },
        "date": 1746593873998,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5287014,
            "range": "± 1865115",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11283731,
            "range": "± 439684",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4888989,
            "range": "± 167400",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10731190,
            "range": "± 188851",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4910169,
            "range": "± 114378",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4903694,
            "range": "± 162935",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4903011,
            "range": "± 106165",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11047092,
            "range": "± 154077",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11043157,
            "range": "± 542397",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11050492,
            "range": "± 451352",
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
          "id": "c428af1d4cc625e2536f859e4845fca7118acdc0",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v40.30.2 (#36)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-05-25T17:38:51+02:00",
          "tree_id": "0b14547087a9b129720ade8530a08a2cda27cc27",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/c428af1d4cc625e2536f859e4845fca7118acdc0"
        },
        "date": 1748187701112,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5337447,
            "range": "± 3085168",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11279481,
            "range": "± 2021541",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4917573,
            "range": "± 141170",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10757304,
            "range": "± 138280",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4952786,
            "range": "± 387493",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4977439,
            "range": "± 249961",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4922612,
            "range": "± 276563",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11072204,
            "range": "± 338775",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11055417,
            "range": "± 112477",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11058376,
            "range": "± 81719",
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
          "id": "92ddda321f741e2d34c70ce272670eb448ad0699",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v40.62.1 (#39)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-07-06T22:40:56+02:00",
          "tree_id": "552da969d4e906a09eb5f1f9aea6be47d760dcb8",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/92ddda321f741e2d34c70ce272670eb448ad0699"
        },
        "date": 1751834665964,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5216112,
            "range": "± 2750879",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11288547,
            "range": "± 1536969",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4913779,
            "range": "± 57355",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10751733,
            "range": "± 340953",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4922556,
            "range": "± 57621",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4930712,
            "range": "± 46233",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4940284,
            "range": "± 135231",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11082076,
            "range": "± 94858",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11076132,
            "range": "± 230198",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11059558,
            "range": "± 240374",
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
          "id": "e5d48cfdb73502ee94cf2ab4b43d1cc26d6f330f",
          "message": "fix(deps): update rust crate fast_image_resize to v5.1.4 (#38)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-07-06T22:41:16+02:00",
          "tree_id": "63fee8166c32b37a223be95b319ba02263adc1f7",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/e5d48cfdb73502ee94cf2ab4b43d1cc26d6f330f"
        },
        "date": 1751834677980,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5517601,
            "range": "± 2455109",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11291491,
            "range": "± 1208546",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4883593,
            "range": "± 992323",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10728886,
            "range": "± 2049181",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4934010,
            "range": "± 1456689",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4923061,
            "range": "± 1144534",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4927161,
            "range": "± 1284448",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11082615,
            "range": "± 2505617",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11494843,
            "range": "± 875659",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11462611,
            "range": "± 1889045",
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
          "id": "cb35cc83c464a9afcd35cb07340d6a6f0b8648ab",
          "message": "chore(deps): update pre-commit hook renovatebot/pre-commit-hooks to v41 (#41)",
          "timestamp": "2025-07-16T23:42:24+02:00",
          "tree_id": "a66e7613d96b4162915768d47cd75d144c37729d",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/cb35cc83c464a9afcd35cb07340d6a6f0b8648ab"
        },
        "date": 1752702320168,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5352785,
            "range": "± 1821587",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11262337,
            "range": "± 611618",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4900790,
            "range": "± 250965",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10736926,
            "range": "± 257296",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4901881,
            "range": "± 62505",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4915464,
            "range": "± 96373",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4919094,
            "range": "± 45294",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11201809,
            "range": "± 504901",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11051611,
            "range": "± 580104",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11037801,
            "range": "± 176019",
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
          "id": "1599e513fdb50e6c6f146bfc844e487805ee1a31",
          "message": "feat: update MRSV & deps (#42)",
          "timestamp": "2025-08-21T13:49:14+02:00",
          "tree_id": "70ebde2da087878fb613e6fe0ff0e4449487752e",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/1599e513fdb50e6c6f146bfc844e487805ee1a31"
        },
        "date": 1755777498181,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5453353,
            "range": "± 2407708",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11472608,
            "range": "± 749603",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4867433,
            "range": "± 91420",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10872682,
            "range": "± 216733",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4962770,
            "range": "± 58676",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4962621,
            "range": "± 229157",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4946169,
            "range": "± 61864",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11221790,
            "range": "± 157686",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11213114,
            "range": "± 137855",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11195006,
            "range": "± 234960",
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
          "id": "1599e513fdb50e6c6f146bfc844e487805ee1a31",
          "message": "feat: update MRSV & deps (#42)",
          "timestamp": "2025-08-21T13:49:14+02:00",
          "tree_id": "70ebde2da087878fb613e6fe0ff0e4449487752e",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/1599e513fdb50e6c6f146bfc844e487805ee1a31"
        },
        "date": 1755777729629,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5390986,
            "range": "± 1819786",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11483488,
            "range": "± 520795",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4969233,
            "range": "± 108661",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10834738,
            "range": "± 233021",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4924117,
            "range": "± 92477",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4925654,
            "range": "± 125788",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4989895,
            "range": "± 99317",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11254269,
            "range": "± 195773",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11089321,
            "range": "± 220383",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11115826,
            "range": "± 292181",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham Azimani",
            "username": "AzHicham"
          },
          "committer": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham Azimani",
            "username": "AzHicham"
          },
          "distinct": true,
          "id": "db1ad9f02befe6e1fc11fda8fd93bbeda7ee0c80",
          "message": "ci: add audit workflow",
          "timestamp": "2025-08-21T22:17:43+02:00",
          "tree_id": "531cb6d81ad8a264e0ceedd9a904c6cd30d069ca",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/db1ad9f02befe6e1fc11fda8fd93bbeda7ee0c80"
        },
        "date": 1755807651181,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5733412,
            "range": "± 2237038",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11518089,
            "range": "± 1661963",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4959126,
            "range": "± 1049254",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10885765,
            "range": "± 2064764",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4942133,
            "range": "± 1227656",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4928132,
            "range": "± 1229578",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4941180,
            "range": "± 1281937",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11222949,
            "range": "± 953338",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11199542,
            "range": "± 1688558",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11213119,
            "range": "± 2410011",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham Azimani",
            "username": "AzHicham"
          },
          "committer": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham Azimani",
            "username": "AzHicham"
          },
          "distinct": true,
          "id": "b83b1670e984142f572c6f1fc0aa4ac9a5566e88",
          "message": "ci: add audit workflow",
          "timestamp": "2025-08-22T14:24:12+02:00",
          "tree_id": "f3abaee5a328bfce4e50071b6d77c041b29b066b",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/b83b1670e984142f572c6f1fc0aa4ac9a5566e88"
        },
        "date": 1755865661863,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5315554,
            "range": "± 3160569",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11203637,
            "range": "± 482314",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4880041,
            "range": "± 88629",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10685575,
            "range": "± 264082",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4899675,
            "range": "± 147786",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4891123,
            "range": "± 79223",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4897360,
            "range": "± 57878",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11014652,
            "range": "± 170688",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11003376,
            "range": "± 222366",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11049848,
            "range": "± 522284",
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
          "id": "6c4c8de1e3ccd2312490c9c0e8cefaf9b8224f08",
          "message": "chore: simplify deps (#44)",
          "timestamp": "2025-08-22T16:25:00+02:00",
          "tree_id": "32370310077596392e5652341d5e0fedf8ac5bbd",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/6c4c8de1e3ccd2312490c9c0e8cefaf9b8224f08"
        },
        "date": 1755872879241,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5115982,
            "range": "± 349730",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11177920,
            "range": "± 379572",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4901469,
            "range": "± 132403",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10748952,
            "range": "± 158854",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4910782,
            "range": "± 58644",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4904268,
            "range": "± 45183",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4916019,
            "range": "± 237200",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11072744,
            "range": "± 109308",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11074890,
            "range": "± 604860",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11070553,
            "range": "± 112657",
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
          "id": "8913462c65bbbec7a3e3abaa9f1f195de6766990",
          "message": "build: replace derivative by derive_more (#46)",
          "timestamp": "2025-08-23T11:49:49+02:00",
          "tree_id": "b303c7b40a3da26c127527a89ffea5cab7551a64",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/8913462c65bbbec7a3e3abaa9f1f195de6766990"
        },
        "date": 1755942752399,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5294518,
            "range": "± 1187399",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11810538,
            "range": "± 1707540",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 5163256,
            "range": "± 281824",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 11244649,
            "range": "± 580973",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 5073489,
            "range": "± 233432",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 5086495,
            "range": "± 321350",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 5142902,
            "range": "± 285043",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11601742,
            "range": "± 574828",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11461191,
            "range": "± 474716",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11451432,
            "range": "± 500770",
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
          "id": "9a9aee3f9c3e51f115c4521e779dc612f1382f23",
          "message": "chore(deps): update actions/checkout action to v5 (#48)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-25T09:15:18+02:00",
          "tree_id": "053c5b6d2f951a421ad5069fd7f2ea5b6917826d",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/9a9aee3f9c3e51f115c4521e779dc612f1382f23"
        },
        "date": 1756106292426,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5286453,
            "range": "± 2352266",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11293041,
            "range": "± 296190",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4904736,
            "range": "± 74272",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10756920,
            "range": "± 204322",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4934914,
            "range": "± 58528",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4931561,
            "range": "± 187321",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4936956,
            "range": "± 71537",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11117460,
            "range": "± 236468",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11087634,
            "range": "± 229793",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11106985,
            "range": "± 212148",
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
          "id": "7cea515f325fab3e1048d3f790da4fe1de836326",
          "message": "chore(deps): update pre-commit (#47)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-25T09:15:31+02:00",
          "tree_id": "55691b799987e3af1e14aab8b07b1051c7dada7d",
          "url": "https://github.com/AzHicham/bioformats-rs/commit/7cea515f325fab3e1048d3f790da4fe1de836326"
        },
        "date": 1756106398805,
        "tool": "cargo",
        "benches": [
          {
            "name": "bioformats_read_image_256",
            "value": 5531216,
            "range": "± 2542489",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_image_512",
            "value": 11483568,
            "range": "± 1386663",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_256",
            "value": 4910448,
            "range": "± 1080690",
            "unit": "ns/iter"
          },
          {
            "name": "bioformats_read_region_512",
            "value": 10773840,
            "range": "± 2111043",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256",
            "value": 4928918,
            "range": "± 1185876",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 4934510,
            "range": "± 1315840",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 4937343,
            "range": "± 1317011",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 11107932,
            "range": "± 992835",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 11111821,
            "range": "± 1648543",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 11101350,
            "range": "± 2458314",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}