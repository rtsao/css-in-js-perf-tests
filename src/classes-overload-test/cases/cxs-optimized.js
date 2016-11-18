import React from 'react';
import { renderToString } from 'react-dom/server';
import cxs from 'cxs/optimized';
import { App } from '../components/App';
import { generateStyles } from '../styles';

export const cxsOptimizedCase = () => {
    const styles = generateStyles();

    const classNames = {};
    for (let className in styles) {
        classNames[className] = cxs(styles[className]);
    }

    const html = renderToString((
        <App classNames={classNames} />
    ));

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
