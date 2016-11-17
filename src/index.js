import { Suite } from 'benchmark';
import beautifyBenchmark from 'beautify-benchmark';
import { aphroditeCase, jssCase, glamorCase, jssWithoutPresetCase, cxsCase } from './cases';

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

jssSuite.on('cycle', (e) => {
    console.log(String(e.target));
    beautifyBenchmark.add(e.target);
});

jssSuite.on('complete', function() {
    beautifyBenchmark.log();
    console.log(`Fastest is: ${this.filter('fastest').map('name')}`)
});

jssSuite.run({ async: true });
