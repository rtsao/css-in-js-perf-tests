import fs from 'fs';
import { Suite } from 'benchmark';
import beautifyBenchmark from 'beautify-benchmark';

import { toKebabCase, pad, createOutputDir, getSizeResults, sizeTable, indent, getSmallest } from './utilities';

export const runTest = (testName, cases) => (
    new Promise((resolve) => {
        const testCases = {};

        Object.keys(cases).forEach((k) => {
            testCases[toKebabCase(k)] = { testCase: cases[k], result: null };
        });

        console.log(`Running ${testName} test.\n`);

        const testSuite = new Suite();

        Object.keys(testCases).forEach((caseName) => {
            testSuite.add(
                caseName,
                () => { testCases[caseName].result = testCases[caseName].testCase(pad(caseName)); },
            );
        });

        testSuite.on('cycle', (e) => {
            beautifyBenchmark.add(e.target);
        });

        testSuite.on('complete', function onComplete() {
            const sizeResults = getSizeResults(testCases);
            const smallest = getSmallest(sizeResults, 'size').map(s => s.caseName);
            const smallestGzipped = getSmallest(sizeResults, 'gzippedSize').map(s => s.caseName);
            const fastest = this.filter('fastest').map('name');

            console.log(indent(sizeTable(sizeResults).print()));
            console.log(indent(`Smallest ${smallest.length < 2 ? 'is: ' : 'are:'}         ${smallest.join(', ')}`));
            console.log(indent(`Smallest gzipped ${smallestGzipped.length < 2 ? 'is: ' : 'are:'} ${smallestGzipped.join(', ')}`));

            beautifyBenchmark.log();
            console.log(indent(`Fastest ${fastest.length < 2 ? 'is' : 'are'}: ${fastest.join(', ')}\n`));

            resolve();
        });

        testSuite.run({ async: true });
    })
);

export const runView = (testName, cases) => (
    new Promise((resolve, reject) => {
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
    })
);
