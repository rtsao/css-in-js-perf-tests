import fs from 'fs';
import { Suite } from 'benchmark';
import beautifyBenchmark from 'beautify-benchmark';

import { toKebabCase, pad, createOutputDir } from './utilities';

export const runTest = (testName, cases) => {
    const testCases = {};

    Object.keys(cases).forEach((k) => {
        testCases[toKebabCase(k)] = { testCase: cases[k], result: null };
    });

    console.log(`Running ${testName} test.\n`);

    const testSuite = new Suite();

    Object.keys(testCases).forEach((caseName) => {
        testSuite.add(caseName, () => { testCases[caseName].result = testCases[caseName].testCase(pad(caseName)); });
    });

    testSuite.on('cycle', (e) => {
        beautifyBenchmark.add(e.target);
    });

    testSuite.on('complete', function onComplete() {
        Object.keys(testCases).forEach((caseName) => {
            console.log(caseName + ' length', testCases[caseName].result.length);
        });

        beautifyBenchmark.log();
        console.log(`Fastest is: ${this.filter('fastest').map('name')}\n`);
    });

    return testSuite.run({ async: true });
};

export const runView = (testName, cases) => {
    const testCases = {};

    Object.keys(cases).forEach((caseName) => {
        testCases[toKebabCase(caseName)] = { testCase: cases[caseName], result: null };
    });

    console.log(`Running view ${testName}.\n`);

    const outputDir = createOutputDir(testName);

    Object.keys(testCases).forEach((caseName) => {
        const html = testCases[caseName].testCase(pad(caseName));
        fs.writeFile(`${outputDir}/${caseName}.html`, html, (err) => {
            if (err) {
                console.log(err);
            }
        });
    });
};
