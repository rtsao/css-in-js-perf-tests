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

aphrodite length 582.
aphrodite-no-important length 472
cssobj length 641
cxs length 552
cxs-optimized length 634
fela length 500
free-style length 521
glamor length 594
j2c length 748
jss length 636
jss-without-preset length 636
styletron length 502

Smallest is: aphrodite-no-important

  aphrodite              x  7,037 ops/sec ±12.63% (67 runs sampled)
  aphrodite-no-important x  7,583 ops/sec ±15.20% (64 runs sampled)
  cssobj                 x  3,934 ops/sec ±12.31% (61 runs sampled)
  cxs                    x 13,753 ops/sec ±4.68% (75 runs sampled)
  cxs-optimized          x  8,202 ops/sec ±10.53% (64 runs sampled)
  fela                   x 47,681 ops/sec ±10.71% (60 runs sampled)
  free-style             x  7,704 ops/sec ±16.27% (45 runs sampled)
  glamor                 x  4,603 ops/sec ±9.38% (66 runs sampled)
  j2c                    x 10,132 ops/sec ±26.09% (42 runs sampled)
  jss                    x  9,409 ops/sec ±17.83% (55 runs sampled)
  jss-without-preset     x 24,151 ops/sec ±3.25% (74 runs sampled)
  styletron              x 62,287 ops/sec ±2.51% (72 runs sampled)

Fastest is: styletron,fela
```

The second test overloads on styles, so it adds `n (ITERATIONS)` amount of different styles with a common part for the buttons. Show which libraries can detect the common part and isolate it.

```
Running style overload test.

aphrodite length 3537
aphrodite-no-important length 2866
cssobj length 3165
cxs length 2757
cxs-optimized length 2874
fela length 1528
free-style length 2491
glamor length 3019
j2c length 4362
jss length 3318
jss-without-preset length 3318
styletron length 1549

Smallest is: fela

  aphrodite              x    884 ops/sec ±14.62% (57 runs sampled)
  aphrodite-no-important x  1,245 ops/sec ±5.38% (69 runs sampled)
  cssobj                 x    639 ops/sec ±12.48% (66 runs sampled)
  cxs                    x  2,130 ops/sec ±11.39% (71 runs sampled)
  cxs-optimized          x  1,418 ops/sec ±14.39% (68 runs sampled)
  fela                   x  8,832 ops/sec ±14.52% (52 runs sampled)
  free-style             x  2,151 ops/sec ±11.25% (62 runs sampled)
  glamor                 x    568 ops/sec ±83.08% (81 runs sampled)
  j2c                    x  3,331 ops/sec ±4.33% (77 runs sampled)
  jss                    x  3,159 ops/sec ±7.12% (80 runs sampled)
  jss-without-preset     x  4,525 ops/sec ±8.19% (71 runs sampled)
  styletron              x 12,920 ops/sec ±2.47% (73 runs sampled)

Fastest is: styletron
```

The third test overloads on classes, so it adds `n (ITERATIONS)` amount of different class names with the same styles. This test is interesting to see which library actually merges these styles when they're identical.

```
Running classes overload test.

aphrodite length 2955
aphrodite-no-important length 2504
cssobj length 2795
cxs length 1334
cxs-optimized length 1713
fela length 1078
free-style length 1173
glamor length 1283
j2c length 3950
jss length 2896
jss-without-preset length 2896
styletron length 1099

Smallest is: fela

  aphrodite              x  1,417 ops/sec ±9.37% (69 runs sampled)
  aphrodite-no-important x  1,307 ops/sec ±12.81% (59 runs sampled)
  cssobj                 x    726 ops/sec ±8.21% (64 runs sampled)
  cxs                    x  3,003 ops/sec ±14.14% (73 runs sampled)
  cxs-optimized          x  2,161 ops/sec ±16.98% (73 runs sampled)
  fela                   x 22,818 ops/sec ±13.86% (65 runs sampled)
  free-style             x  1,975 ops/sec ±21.42% (51 runs sampled)
  glamor                 x  2,974 ops/sec ±23.82% (43 runs sampled)
  j2c                    x  1,138 ops/sec ±33.92% (29 runs sampled)
  jss                    x  2,449 ops/sec ±11.92% (59 runs sampled)
  jss-without-preset     x  3,788 ops/sec ±15.98% (58 runs sampled)
  styletron              x 15,134 ops/sec ±15.54% (51 runs sampled)

Fastest is: fela
```

The fourth test is about media queries and pseudo-styles with nested style objects.

```
Running nested test.

aphrodite length 1179
aphrodite-no-important length 926
cssobj length 1089
cxs length 975
cxs-optimized length 1061
fela length 800
free-style length 802
glamor length 1335
j2c length 1339
jss length 1089
jss-without-preset length 1089
styletron length 790

Smallest is: styletron

  aphrodite              x  2,947 ops/sec ±9.52% (66 runs sampled)
  aphrodite-no-important x  3,771 ops/sec ±5.87% (72 runs sampled)
  cssobj                 x  1,507 ops/sec ±9.05% (68 runs sampled)
  cxs                    x  7,209 ops/sec ±4.26% (74 runs sampled)
  cxs-optimized          x  4,411 ops/sec ±13.71% (59 runs sampled)
  fela                   x  7,809 ops/sec ±18.96% (41 runs sampled)
  free-style             x  3,377 ops/sec ±24.61% (47 runs sampled)
  glamor                 x  2,398 ops/sec ±7.60% (67 runs sampled)
  j2c                    x 10,545 ops/sec ±4.80% (73 runs sampled)
  jss                    x  3,245 ops/sec ±11.23% (62 runs sampled)
  jss-without-preset     x  5,420 ops/sec ±5.30% (76 runs sampled)
  styletron              x 20,192 ops/sec ±8.83% (68 runs sampled)

Fastest is: styletron
```

### Bundle sizes

Launch with `npm run bundle`.

```
Size j2c 4.624KB
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

(simple) Doesn't remove a non-used class. Generates class names like `a`, `b`, `c`. Each class has one property only, they are merged at element level.
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

#### j2c

(simple) Doesn't remove a non-used class. Generates class names like `original-name_j2c_5atjj2_120pllj_lsbclb_1lwh5gt_0`. Class names change between generations. CSS is minified with newlines.
(style overload) Different classes with a common style are kept as is.
(classes overload) Doesn't detect identical classes that remain duplicate.
(nested) Manages pseudo-classes and media queries.

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
