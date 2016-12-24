import fs from 'fs';
import { Suite } from 'benchmark';
import beautifyBenchmark from 'beautify-benchmark';

import { toKebabCase, pad, createOutputDir } from './utilities';

export const runTest = (testName, cases) => {
    return new Promise((resolve, reject) => {
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
            let smallestSize = Number.MAX_VALUE;
            let smallest = [];
            Object.keys(testCases).forEach((caseName) => {
                const length = testCases[caseName].result.length;
                console.log(`${caseName} length`, length);
                if (smallestSize === length) {
                    smallest = [...smallest, caseName];
                } else if (smallestSize > length) {
                    smallestSize = length;
                    smallest = [caseName];
                }
            });
            console.log(`\nSmallest is: ${smallest}`);

            beautifyBenchmark.log();
            console.log(`Fastest is: ${this.filter('fastest').map('name')}\n`);

            resolve();
        });

        testSuite.run({ async: true });
    });
};

export const runView = (testName, cases) => {
    return new Promise((resolve, reject) => {
        const testCases = {};

        Object.keys(cases).forEach((caseName) => {
            testCases[toKebabCase(caseName)] = { testCase: cases[caseName], result: null };
        });

        console.log(`Running view ${testName}.\n`);

        const outputDir = createOutputDir(testName.replace(/ /, '-'));

        Object.keys(testCases).forEach((caseName) => {
            const html = testCases[caseName].testCase(pad(caseName));
            const path = `${outputDir}/${caseName}.html`;
            fs.writeFile(path, html, (err) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log(`Wrote ${path}`);
                    resolve(path);
                }
            });
        });
    });
};
