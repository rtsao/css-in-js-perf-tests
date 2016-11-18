# CSS-in-js Performance tests

Testing a couple of CSS in JS libraries, check [the source folder](./src/cases) for the different cases.

```
Running classes overload test.

aphroditeCase length 3044
jssCase length 3085
jssWithoutPresetCase length 3064
glamorCase length 1935
cxsCase length 1943
cxsOptimizedCase length 1943

  6 tests completed.

  aphrodite          x 2,507 ops/sec ±3.77% (76 runs sampled)
  jss                x 4,170 ops/sec ±7.42% (69 runs sampled)
  jss-without-preset x 6,993 ops/sec ±6.86% (66 runs sampled)
  glamor             x 6,916 ops/sec ±4.80% (72 runs sampled)
  cxs                x 3,642 ops/sec ±5.84% (73 runs sampled)
  cxsOptimizedCase   x 2,957 ops/sec ±6.48% (75 runs sampled)

Fastest is: glamor,jss-without-preset
```
