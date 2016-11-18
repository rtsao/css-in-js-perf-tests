import React from 'react';
import { renderToString } from 'react-dom/server';
import cxs from 'cxs/optimized';
import { App } from '../components/App';
import { styles } from '../styles';

export const cxsOptimzedCase = () => {
    const classNames = {
        container: cxs(styles.container),
        button: cxs(styles.button),
    };

    const html = renderToString((
        <App classNames={{
            container: classNames.container,
            button: classNames.button,
        }} />
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
