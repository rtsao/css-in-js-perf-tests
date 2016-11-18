import { run as runSimpleTest } from './simple-test';
import { run as runClassesOverloadTest } from './classes-overload-test';

runClassesOverloadTest().on('complete', () => {
    runSimpleTest();
});
