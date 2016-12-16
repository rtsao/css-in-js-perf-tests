# CSS-in-JS Performance Tests

Testing a couple of CSS-in-JS libraries, check [the source folder](./src/) for the different tests.

And read why we did these tests in the [CSS-in-JS Battle](https://engineering.hellofresh.com/the-css-in-js-battle-89c34a7a83ea) article.

## Usage

You can clone this repository, `npm install` and run `npm run bench` to run the tests yourself.

To set the amount of iterations (see below) you can set an environment variable called `ITERATIONS`. This will result in: `ITERATIONS=100 npm run bench`.

> Make sure you have Node6 or higher installed as well.

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

The first test is just a simple render test, generates two classes, one for a container and one for a button.

```
Running simple test.

aphrodite length 470
cxs length 400
cxs-optimized length 445
fela length 364
free-style length 374
glamor length 422
jss length 447
jss-without-preset length 443
styletron length 366

  aphrodite          x  9,421 ops/sec ±11.15% (61 runs sampled)
  cxs                x 21,834 ops/sec ±9.34% (65 runs sampled)
  cxs-optimized      x 17,377 ops/sec ±3.65% (76 runs sampled)
  fela               x 88,236 ops/sec ±2.32% (78 runs sampled)
  free-style         x 26,104 ops/sec ±3.70% (73 runs sampled)
  glamor             x  9,893 ops/sec ±4.66% (74 runs sampled)
  jss                x 19,535 ops/sec ±12.20% (74 runs sampled)
  jss-without-preset x 27,642 ops/sec ±5.66% (64 runs sampled)
  styletron          x 62,560 ops/sec ±10.55% (67 runs sampled)

Fastest is: fela
```

The second test overloads on styles, so it adds `n (ITERATIONS)` amount of different styles with a common part for the buttons. Show which libraries can detect the common part and isolate it.

```
Running styles overload test.

aphrodite length 2868
jss length 2783
jss-without-preset length 2745
glamor length 2572
cxs length 2296
cxs-optimized length 2337
styletron length 1370
fela length 1349


  aphrodite          x  1,446 ops/sec ±2.55% (69 runs sampled)
  jss                x  3,160 ops/sec ±2.85% (75 runs sampled)
  jss-without-preset x  4,733 ops/sec ±2.15% (79 runs sampled)
  glamor             x  1,120 ops/sec ±2.48% (76 runs sampled)
  cxs                x  2,598 ops/sec ±2.88% (81 runs sampled)
  cxs-optimized      x  1,957 ops/sec ±2.92% (76 runs sampled)
  styletron          x 14,782 ops/sec ±2.18% (78 runs sampled)
  fela               x 14,934 ops/sec ±2.69% (76 runs sampled)

Fastest is: fela,styletron
```

The third test overloads on classes, so it adds `n (ITERATIONS)` amount of different class names with the same styles. This test is interesting to see which library actually merges these styles when they're identical.

```
Running classes overload test.

aphrodite length 2318
cxs length 1217
cxs-optimized length 1217
fela length 939
free-style length 1079
glamor length 1209
jss length 2359
jss-without-preset length 2359
styletron length 960


  aphrodite          x  2,292 ops/sec ±7.38% (68 runs sampled)
  cxs                x  3,444 ops/sec ±12.54% (66 runs sampled)
  cxs-optimized      x  3,153 ops/sec ±5.70% (71 runs sampled)
  fela               x 37,402 ops/sec ±7.99% (67 runs sampled)
  free-style         x  4,171 ops/sec ±1.95% (80 runs sampled)
  glamor             x  8,089 ops/sec ±2.90% (79 runs sampled)
  jss                x  3,927 ops/sec ±5.35% (73 runs sampled)
  jss-without-preset x  5,798 ops/sec ±8.63% (62 runs sampled)
  styletron          x 32,160 ops/sec ±8.80% (71 runs sampled)

Fastest is: fela
```

The fourth test is about media queries and pseudo-styles with nested style objects.

```
Running nested test.

aphrodite length 813
cxs length 676
cxs-optimized length 727
fela length 540
free-style length 547
glamor length 887
jss length 592
jss-without-preset length 555
styletron length 536


  aphrodite          x  6,185 ops/sec ±4.80% (75 runs sampled)
  cxs                x  9,746 ops/sec ±8.49% (77 runs sampled)
  cxs-optimized      x  8,084 ops/sec ±8.27% (70 runs sampled)
  fela               x 25,574 ops/sec ±7.74% (73 runs sampled)
  free-style         x  7,226 ops/sec ±16.29% (61 runs sampled)
  glamor             x  3,966 ops/sec ±9.45% (75 runs sampled)
  jss                x  9,697 ops/sec ±2.41% (85 runs sampled)
  jss-without-preset x 20,610 ops/sec ±16.18% (61 runs sampled)
  styletron          x 30,576 ops/sec ±9.78% (70 runs sampled)

Fastest is: styletron
```

### Bundle sizes

Launch with `npm run bundle`.

```
Size cssobj 10.375KB
Size cssobj-server 7.181KB
Size free-style 8.3KB
Size styletron 2.667KB
Size jss-without-preset 26.183KB
Size glamor 31.421KB
Size cxs 9.366KB
Size fela 13.161KB
Size cxs-optimized 12.268KB
Size jss 37.185KB
Size aphrodite 19.711KB
Size aphrodite-no-important 19.744KB
```

### View generated code

Launch with `npm run view`.

Find the generated HTML files with their embeded CSS for each test in the `output` directory.

Some observations:

For all of them, class name is stable between generations if same content. Unless said otherwise, the generated CSS is minimized.

#### aphrodite and aphrodite-no-important

(simple) Removes a non-used class. Generates class names like `original-name_1fm03kj`. By default, adds `!important` to each CSS property, *aphrodite-no-important* generates CSS without it.
(style overload) Different classes with a common style are kept as is.
(classes overload) Doesn't detect identical classes that remain duplicate.
(nested) Manages pseudo-classes and media queries.

#### cssobj

(simple) Doesn't remove a non-used class. Generates class names like `original-name_13otckp1_` (customizable suffix).
(style overload) Different classes with a common style are kept as is.
(classes overload) Doesn't detect identical classes that remain duplicate.
(nested) Manages pseudo-classes and media queries.

#### cxs and cxs-optimized

(simple) Doesn't remove a non-used class. Generates class names like `cxs-4211614354`.
(style overload) Different classes with a common style are kept as is.
(classes overload) Detects identical classes that are merged.
(nested) Manages pseudo-classes and media queries.

cxs-optimized can generate some specialized classes (with names like `cxs-display-block` or `cxs-text-align-center`) removed from the classes using these styles and added to elements using them. Seems limited to properties with a small number of possible values. Named colors are not deduplicated.

#### fela

(simple) Removes a non-used class. Generates class names like `a`, `b`, `c`. Each class has one property only, they are merged at element level.
(style overload) Styles common to several classes go to classes added to all corresponding elements.
(classes overload) Detects identical classes that are merged.
(nested) Manages pseudo-classes and media queries.

#### free-style

(simple) Doesn't remove a non-used class. Generates class names like `f1lzwo7y`.
(style overload) Different classes with a common style are kept as is.
(classes overload) Detects identical classes that are merged.
(nested) Manages pseudo-classes and media queries.

#### glamor

(simple) Doesn't remove a non-used class. Generates class names like `css-h433f4`. Add selectors like `[data-css-h433f4]`.
(style overload) Different classes with a common style are kept as is.
(classes overload) Detects identical classes that are merged.
(nested) Manages pseudo-classes and media queries. Adds selectors like `css-1u8v7v4[data-simulate-hover]`.

#### jss and jss-without-preset

(simple) Doesn't remove a non-used class. Generates class names like `original-name-3553477605`. CSS is formatted and indented (1 space).
(style overload) Different classes with a common style are kept as is.
(classes overload) Doesn't detect identical classes that remain duplicate.
(nested) Manages pseudo-classes and media queries.

#### styletron

(simple) Doesn't remove a non-used class. Generates class names like `a`, `b`, `c`. Each class has one property only, they are merged at element level (starts with a space).
(style overload) Styles common to several classes go to classes added to all corresponding elements.
(classes overload) Detects identical classes that are merged.
(nested) Manages pseudo-classes and media queries.


<p align="center">
  <a href="https://hellofresh.com">
    <img width="120" src="https://www.hellofresh.de/images/hellofresh/press/HelloFresh_Logo.png">
  </a>
</p>
