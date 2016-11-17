# CSS-in-js Performance tests

Testing [aphrodite](./src/cases/aphrodite.js), [glamor](./src/cases/glamor.js) and [jss](./src/cases/jss.js) (also without presets: [jss-without-preset](./src/cases/jss-without-preset.js)).

```
4 tests completed.

aphrodite          x 1,524 ops/sec ±33.37% (26 runs sampled)
jss                x 93.79 ops/sec ±56.27% (8 runs sampled)
jss-without-preset x 67.38 ops/sec ±13.34% (43 runs sampled)
glamor             x 6,025 ops/sec ±17.19% (40 runs sampled)

Fastest is: glamor
```
