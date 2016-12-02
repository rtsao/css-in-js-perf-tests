# CSS-in-js Performance tests

Testing a couple of CSS in JS libraries, check [the source folder](./src/cases) for the different tests.

## Usage

You can clone this repository, `npm install` and run `npm run bench` to run the tests yourself.

To set the amount of iterations you can set an environment variable called `ITERATIONS`. This will result in: `ITERATIONS=100 npm run bench`.

## Specs

The specs from the machine on which the tests were run:

```
$ node -v
v6.3.0

$ /usr/sbin/system_profiler SPHardwareDataType
Hardware:

    Hardware Overview:

      Model Name: MacBook Pro
      Model Identifier: MacBookPro12,1
      Processor Name: Intel Core i7
      Processor Speed: 3,1 GHz
      Number of Processors: 1
      Total Number of Cores: 2
      L2 Cache (per Core): 256 KB
      L3 Cache: 4 MB
      Memory: 16 GB
```

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
styletron length 366

  7 tests completed.

  aphrodite          x  9,087 ops/sec ±14.96% (57 runs sampled)
  jss                x 12,512 ops/sec ±16.83% (49 runs sampled)
  jss-without-preset x 36,058 ops/sec ±5.82% (73 runs sampled)
  glamor             x  7,568 ops/sec ±10.07% (65 runs sampled)
  cxs                x 18,980 ops/sec ±11.82% (63 runs sampled)
  cxs-optimized      x 15,602 ops/sec ±8.86% (70 runs sampled)
  styletron          x 66,742 ops/sec ±6.27% (69 runs sampled)

Fastest is: styletron
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
styletron length 1370

  7 tests completed.

  aphrodite          x  1,088 ops/sec ±16.49% (56 runs sampled)
  jss                x  2,828 ops/sec ±7.92% (67 runs sampled)
  jss-without-preset x  4,660 ops/sec ±9.08% (67 runs sampled)
  glamor             x  1,094 ops/sec ±7.00% (71 runs sampled)
  cxs                x  1,935 ops/sec ±13.26% (60 runs sampled)
  cxs-optimized      x  1,745 ops/sec ±10.21% (65 runs sampled)
  styletron          x 12,603 ops/sec ±9.19% (63 runs sampled)

Fastest is: styletron
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
styletron length 960

  7 tests completed.

  aphrodite          x  2,197 ops/sec ±8.90% (70 runs sampled)
  jss                x  3,353 ops/sec ±8.96% (66 runs sampled)
  jss-without-preset x  3,955 ops/sec ±14.09% (48 runs sampled)
  glamor             x  7,163 ops/sec ±8.10% (69 runs sampled)
  cxs                x  4,246 ops/sec ±2.19% (79 runs sampled)
  cxs-optimized      x  3,128 ops/sec ±4.69% (73 runs sampled)
  styletron          x 24,724 ops/sec ±22.10% (65 runs sampled)

Fastest is: styletron
```

### Bundle sizes

```
Size cxs 9.766KB
Size styletron 12KB
Size jss-without-preset 24.654KB
Size cxs-optimized 12.668KB
Size jss 37.04KB
Size glamor 35.436KB
Size aphrodite 18.919KB
```

<p align="center">
  <a href="https://hellofresh.com">
    <img width="120" src="https://www.hellofresh.de/images/hellofresh/press/HelloFresh_Logo.png">
  </a>
</p>
