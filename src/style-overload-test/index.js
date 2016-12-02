import { Suite } from 'benchmark';
import beautifyBenchmark from 'beautify-benchmark';
import { aphroditeCase, jssCase, glamorCase, jssWithoutPresetCase, cxsCase, cxsOptimizedCase, styletronCase } from './cases';

export const run = () => {
    console.log('Running styles overload test.');

    console.log('aphrodite length', aphroditeCase().length);
    console.log('jss length', jssCase().length);
    console.log('jss-without-preset length', jssWithoutPresetCase().length);
    console.log('glamor length', glamorCase().length);
    console.log('cxs length', cxsCase().length);
    console.log('cxs-optimized length', cxsOptimizedCase().length);
    console.log('styletron length', styletronCase().length);

    const jssSuite = new Suite();

    jssSuite.add('aphrodite', () => aphroditeCase());
    jssSuite.add('jss', () => jssCase());
    jssSuite.add('jss-without-preset', () => jssWithoutPresetCase());
    jssSuite.add('glamor', () => glamorCase());
    jssSuite.add('cxs', () => cxsCase());
    jssSuite.add('cxs-optimized', () => cxsOptimizedCase());
    jssSuite.add('styletron', () => styletronCase());

    jssSuite.on('cycle', (e) => {
        beautifyBenchmark.add(e.target);
    });

    jssSuite.on('complete', function() {
        beautifyBenchmark.log();
        console.log(`Fastest is: ${this.filter('fastest').map('name')}\n`);
    });

    return jssSuite.run({ async: true });
};

run();
