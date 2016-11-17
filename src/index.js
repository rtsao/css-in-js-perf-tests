import { Suite } from 'benchmark';
import { aphroditeCase, jssCase, glamorCase } from './cases';

// console.log(aphroditeCase(), jssCase(), glamorCase());

const jssSuite = new Suite();

jssSuite.add('aphrodite', () => {
    return aphroditeCase();
});

jssSuite.add('jss', () => {
    return jssCase();
});

jssSuite.add('glamor', () => {
    return glamorCase();
});

jssSuite.on('cycle', (e) => {
    console.log(e.target);
});

jssSuite.on('complete', function() {
    console.log(`Fastest is: ${this.filter('fastest').map('name')}`)
});

jssSuite.run({ async: true });
