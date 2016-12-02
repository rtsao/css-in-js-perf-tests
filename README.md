# CSS-in-js Performance tests

Testing a couple of CSS in JS libraries, check [the source folder](./src/cases) for the different tests.

## Usage

You can clone this repository, `npm install` and run `npm run bench` to run the tests yourself.

To set the amount of iterations you can set an environment variable called `ITERATIONS`. This will result in: `ITERATIONS=100 npm run bench`.

## Results

The first test is just a simple render test, generate 2 class names, one for a container and one for a button.

```
Running simple test.

aphrodite length 470
jss length 447
jss-without-preset length 443
glamor length 422
cxs length 400
cxs-optimized length 445
  6 tests completed.

  aphrodite          x 11,098 ops/sec ±6.56% (72 runs sampled)
  jss                x 23,644 ops/sec ±3.63% (74 runs sampled)
  jss-without-preset x 35,984 ops/sec ±6.79% (74 runs sampled)
  glamor             x  5,846 ops/sec ±16.43% (46 runs sampled)
  cxs                x 22,370 ops/sec ±5.48% (70 runs sampled)
  cxs-optimized      x 14,466 ops/sec ±13.06% (70 runs sampled)

Fastest is: jss-without-preset
```

The second test overloads on styles, so it adds `n (ITERATIONS)` amount of different styles for the button.

```
Running styles overload test.

aphrodite length 2868
jss length 2783
jss-without-preset length 2745
glamor length 2572
cxs length 2296
cxs-optimized length 2337
  6 tests completed.

  aphrodite          x 1,519 ops/sec ±3.37% (78 runs sampled)
  jss                x 2,659 ops/sec ±6.22% (66 runs sampled)
  jss-without-preset x 4,558 ops/sec ±5.93% (62 runs sampled)
  glamor             x 1,196 ops/sec ±3.94% (78 runs sampled)
  cxs                x 2,806 ops/sec ±1.96% (80 runs sampled)
  cxs-optimized      x 2,083 ops/sec ±2.86% (72 runs sampled)

Fastest is: jss-without-preset
```

The third test overloads on class names, so it adds `n (ITERATIONS)` amount of different class names with the same styles. This test is interesting to see which library actually merges these styles when they're similar.

```
Running classes overload test.

aphrodite length 2318
jss length 2359
jss-without-preset length 2359
glamor length 1209
cxs length 1217
cxs-optimized length 1217
  6 tests completed.

  aphrodite          x 2,318 ops/sec ±9.89% (78 runs sampled)
  jss                x 4,258 ops/sec ±5.73% (75 runs sampled)
  jss-without-preset x 6,871 ops/sec ±1.79% (77 runs sampled)
  glamor             x 6,771 ops/sec ±11.57% (71 runs sampled)
  cxs                x 3,541 ops/sec ±10.22% (68 runs sampled)
  cxs-optimized      x 2,988 ops/sec ±7.57% (72 runs sampled)

Fastest is: jss-without-preset,glamor
```

### Bundle sizes

```
Size cxs 9.766KB
Size cxs-optimized 12.668KB
Size jss-without-preset 24.183KB
Size jss 37.04KB
Size aphrodite 18.919KB
Size glamor 35.436KB
```

<p align="center">
  <a href="https://hellofresh.com">
    <img width="120" src="https://www.hellofresh.de/images/hellofresh/press/HelloFresh_Logo.png">
  </a>
</p>
