import cxs from 'cxs';
import { generateStyles } from '../styles';
import { renderHtml } from './render';

export const cxsCase = () => {
    const styles = generateStyles();

    const classNames = {};
    for (const className in styles) {
        classNames[className] = cxs(styles[className]);
    }

    const html = renderHtml(classNames);

    const { css } = cxs;

    cxs.reset();

    return `
        <html>
            <head>
                <style type="text/css">${css}</style>
            </head>
            <body>${html}</body>
        </html>
    `;
};
