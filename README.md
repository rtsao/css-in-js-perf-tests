# CSS-in-js Performance tests

Testing a couple of CSS in JS libraries, check [the source folder](./src/cases) for the different cases.

```
Running simple test.
aphroditeCase length 470
jssCase length 447
jssWithoutPresetCase length 439
glamorCase length 422
cxsCase length 400
cxsOptimizedCase length 445
  6 tests completed.

  aphrodite          x 12,126 ops/sec ±4.39% (75 runs sampled)
  jss                x 23,232 ops/sec ±7.24% (74 runs sampled)
  jss-without-preset x 63,252 ops/sec ±3.49% (78 runs sampled)
  glamor             x  9,635 ops/sec ±8.12% (72 runs sampled)
  cxs                x 18,529 ops/sec ±17.52% (60 runs sampled)
  cxsOptimizedCase   x  9,618 ops/sec ±18.01% (52 runs sampled)

Fastest is: jss-without-preset
```

```
Running styles overload test.
aphroditeCase length 3594
jssCase length 3509
jssWithoutPresetCase length 3430
glamorCase length 3298
cxsCase length 3022
cxsOptimizedCase length 3063
  6 tests completed.

  aphrodite          x 1,353 ops/sec ±10.29% (65 runs sampled)
  jss                x 2,768 ops/sec ±9.85% (66 runs sampled)
  jss-without-preset x 6,502 ops/sec ±6.01% (70 runs sampled)
  glamor             x 1,095 ops/sec ±5.27% (70 runs sampled)
  cxs                x 2,341 ops/sec ±5.75% (74 runs sampled)
  cxsOptimizedCase   x 1,892 ops/sec ±3.65% (75 runs sampled)

Fastest is: jss-without-preset
```

```
Running classes overload test.
aphroditeCase length 3044
jssCase length 3085
jssWithoutPresetCase length 3064
glamorCase length 1935
cxsCase length 1943
cxsOptimizedCase length 1943
  6 tests completed.

  aphrodite          x 2,246 ops/sec ±4.07% (74 runs sampled)
  jss                x 4,029 ops/sec ±5.32% (70 runs sampled)
  jss-without-preset x 5,942 ops/sec ±9.98% (58 runs sampled)
  glamor             x 5,981 ops/sec ±8.86% (77 runs sampled)
  cxs                x 3,736 ops/sec ±4.05% (75 runs sampled)
  cxsOptimizedCase   x 3,191 ops/sec ±3.32% (77 runs sampled)

Fastest is: glamor,jss-without-preset
```

### Bundle sizes

```
Size cxs 25.912KB
Size cxs-optimized 31.2KB
Size jss-without-preset 68.885KB
Size jss 103.274KB
Size aphrodite 66.562KB
Size glamor 92.209KB
```

<p align="center">
  <a href="https://hellofresh.com">
    <img width="120" src="https://www.hellofresh.de/images/hellofresh/press/HelloFresh_Logo.png">
  </a>
</p>
