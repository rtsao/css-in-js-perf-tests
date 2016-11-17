import { Suite } from 'benchmark';
import { aphroditeCase } from './cases';

const jssSuite = new Suite();

jssSuite.add('aphrodite', () => {
    return aphroditeCase();
});

jssSuite.on('cycle', (e) => {
    console.log(e.target);
});

jssSuite.on('complete', function() {
    console.log(`Fastest is: ${this.filter('fastest').map('name')}`)
});

jssSuite.run({ async: true });
