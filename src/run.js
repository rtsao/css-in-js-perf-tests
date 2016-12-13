import { Suite } from 'benchmark';
import beautifyBenchmark from 'beautify-benchmark';

export default (testName, cases) => {
    var aphrodite, jss, jssWithoutPreset, glamor, cxs, cxsOptimized, styletron, fela;

	console.log(`Running ${testName} test.\n`);

    const jssSuite = new Suite();

    jssSuite.add('aphrodite', () => aphrodite = cases.aphroditeCase());
    jssSuite.add('jss', () => jss = cases.jssCase());
    jssSuite.add('jss-without-preset', () => jssWithoutPreset = cases.jssWithoutPresetCase());
    jssSuite.add('glamor', () => glamor = cases.glamorCase());
    jssSuite.add('cxs', () => cxs = cases.cxsCase());
    jssSuite.add('cxs-optimized', () => cxsOptimized = cases.cxsOptimizedCase());
    jssSuite.add('styletron', () => styletron = cases.styletronCase());
    jssSuite.add('fela', () => fela = cases.felaCase());

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
