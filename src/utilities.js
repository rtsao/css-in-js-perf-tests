import fs from 'fs';

export const toKebabCase = n =>
    n.replace(/Case$/, '').replace(/([a-z])([A-Z])/g, (match, c1, c2) => `${c1}-${c2.toLowerCase()}`);

export const pad = (n) => {
    const titleLength = 30;
    const p = '====================';
    const title = `${p} ${n} ${p}`;
    const offset = (title.length - titleLength) / 2;
    return title.substr(offset, titleLength);
};

export const OUTPUT = './output/';

export const createOutputDir = (testName) => {
    const outputDir = OUTPUT + testName;
    if (!fs.existsSync(OUTPUT)) {
        fs.mkdirSync(OUTPUT);
    }
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    return outputDir;
};
