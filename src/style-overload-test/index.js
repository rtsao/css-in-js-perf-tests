import { Suite } from 'benchmark';
import beautifyBenchmark from 'beautify-benchmark';
import { aphroditeCase, jssCase, glamorCase, felaCase, jssWithoutPresetCase, cxsCase, cxsOptimizedCase, styletronCase } from './cases';

export const run = () => {
    var aphrodite, jss, jssWithoutPreset, glamor, cxs, cxsOptimized, styletron, fela;

    console.log('Running styles overload test.\n');

    const jssSuite = new Suite();

    jssSuite.add('aphrodite', () => aphrodite = aphroditeCase());
    jssSuite.add('jss', () => jss = jssCase());
    jssSuite.add('jss-without-preset', () => jssWithoutPreset = jssWithoutPresetCase());
    jssSuite.add('glamor', () => glamor = glamorCase());
    jssSuite.add('cxs', () => cxs = cxsCase());
    jssSuite.add('cxs-optimized', () => cxsOptimized = cxsOptimizedCase());
    jssSuite.add('styletron', () => styletron = styletronCase());
    jssSuite.add('fela', () => fela = felaCase());

    jssSuite.on('cycle', (e) => {
        beautifyBenchmark.add(e.target);
    });

    jssSuite.on('complete', function() {
        console.log('aphrodite length', aphrodite.length);
        console.log('jss length', jss.length);
        console.log('jss-without-preset length', jssWithoutPreset.length);
        console.log('glamor length', glamor.length);
        console.log('cxs length', cxs.length);
        console.log('cxs-optimized length', cxsOptimized.length);
        console.log('styletron length', styletron.length);
        console.log('fela length', fela.length);

        beautifyBenchmark.log();
        console.log(`Fastest is: ${this.filter('fastest').map('name')}\n`);
    });

    return jssSuite.run({ async: true });
};

run();
