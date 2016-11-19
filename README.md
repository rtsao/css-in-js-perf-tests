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
jss-without-preset length 439
glamor length 422
cxs length 400
cxs-optimized length 445
  6 tests completed.

  aphrodite          x  8,943 ops/sec ±14.55% (68 runs sampled)
  jss                x 11,697 ops/sec ±27.81% (55 runs sampled)
  jss-without-preset x 46,684 ops/sec ±7.89% (62 runs sampled)
  glamor             x  5,042 ops/sec ±14.27% (47 runs sampled)
  cxs                x 19,122 ops/sec ±10.24% (69 runs sampled)
  cxs-optimized      x 12,843 ops/sec ±10.52% (69 runs sampled)

Fastest is: jss-without-preset
```

The second test overloads on styles, so it adds `n (ITERATIONS)` amount of different styles for the button.

```
Running styles overload test.
aphrodite length 3594
jss length 3509
jss-without-preset length 3430
glamor length 3298
cxs length 3022
cxs-optimized length 3063
  6 tests completed.

  aphrodite          x   853 ops/sec ±19.51% (54 runs sampled)
  jss                x 2,200 ops/sec ±10.85% (66 runs sampled)
  jss-without-preset x 4,301 ops/sec ±17.48% (55 runs sampled)
  glamor             x   665 ops/sec ±17.53% (56 runs sampled)
  cxs                x 1,032 ops/sec ±24.12% (43 runs sampled)
  cxs-optimized      x   743 ops/sec ±21.16% (45 runs sampled)

Fastest is: jss-without-preset
```

The third test overloads on class names, so it adds `n (ITERATIONS)` amount of different class names with the same styles. This test is interesting to see which library actually merges these styles when they're similar.

```
Running classes overload test.
aphrodite length 3044
jss length 3085
jss-without-preset length 3064
glamor length 1935
cxs length 1943
cxs-optimized length 1943
  6 tests completed.

  aphrodite          x 1,145 ops/sec ±23.06% (55 runs sampled)
  jss                x 1,305 ops/sec ±31.53% (39 runs sampled)
  jss-without-preset x 2,723 ops/sec ±17.48% (38 runs sampled)
  glamor             x 2,698 ops/sec ±18.00% (48 runs sampled)
  cxs                x 1,697 ops/sec ±15.10% (46 runs sampled)
  cxs-optimized      x 2,359 ops/sec ±7.45% (72 runs sampled)

Fastest is: jss-without-preset,glamor
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
