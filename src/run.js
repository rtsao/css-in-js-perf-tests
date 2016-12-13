import { Suite } from 'benchmark';
import beautifyBenchmark from 'beautify-benchmark';

export default (testName, cases) => {
    const testCases = {};

    function toKebabCase(n) {
        return n.replace(/Case$/, '').replace(/([a-z])([A-Z])/g, (match, c1, c2) => `${c1}-${c2.toLowerCase()}`);
    }

    Object.keys(cases).forEach((k) => {
        testCases[toKebabCase(k)] = { testCase: cases[k], result: null };
    });

    console.log(`Running ${testName} test.\n`);

    const testSuite = new Suite();

    Object.keys(testCases).forEach((k) => {
        testSuite.add(k, () => { testCases[k].result = testCases[k].testCase(); });
    });

    testSuite.on('cycle', (e) => {
        beautifyBenchmark.add(e.target);
    });

    testSuite.on('complete', function onComplete() {
        Object.keys(testCases).forEach((k) => {
            console.log(k + ' length', testCases[k].result.length);
        });

        beautifyBenchmark.log();
        console.log(`Fastest is: ${this.filter('fastest').map('name')}\n`);
    });

    return testSuite.run({ async: true });
};
