import { run as runSimpleTest } from './simple-test';
import { run as runClassesOverloadTest } from './classes-overload-test';
import { run as runStyleOverloadTest } from './style-overload-test';

runClassesOverloadTest().on('complete', () => {
    runSimpleTest().on('complete', () => {
        runStyleOverloadTest();
    });
});
