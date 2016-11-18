import { Suite } from 'benchmark';
import beautifyBenchmark from 'beautify-benchmark';
import { aphroditeCase, jssCase, glamorCase, jssWithoutPresetCase, cxsCase, cxsOptimzedCase } from './cases';

export const run = () => {
    console.log('Running simple test.');

    console.log('aphroditeCase length', aphroditeCase().length);
    console.log('jssCase length', jssCase().length);
    console.log('jssWithoutPresetCase length', jssWithoutPresetCase().length);
    console.log('glamorCase length', glamorCase().length);
    console.log('cxsCase length', cxsCase().length);
    console.log('cxsOptimzedCase length', cxsCase().length);

    const jssSuite = new Suite();

    jssSuite.add('aphrodite', () => {
        return aphroditeCase();
    });

    jssSuite.add('jss', () => {
        return jssCase();
    });

    jssSuite.add('jss-without-preset', () => {
        return jssWithoutPresetCase();
    });

    jssSuite.add('glamor', () => {
        return glamorCase();
    });

    jssSuite.add('cxs', () => {
        return cxsCase();
    });

    jssSuite.add('cxsOptimizedCase', () => {
        return cxsOptimizedCase();
    });

    jssSuite.on('cycle', (e) => {
        beautifyBenchmark.add(e.target);
    });

    jssSuite.on('complete', function() {
        beautifyBenchmark.log();
        console.log(`Fastest is: ${this.filter('fastest').map('name')}`)
    });

    return jssSuite.run({ async: true });
};
