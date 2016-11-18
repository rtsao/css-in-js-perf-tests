import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from '../components/App';
import { generateStyles } from '../styles';
import { renderStatic } from 'glamor/server';
import { style, flush } from 'glamor';

export const glamorCase = () => {
    const styles = generateStyles();

    const classNames = {};
    for (let className in styles) {
        classNames[className] = style(styles[className]);
    }

    const { html, css } = renderStatic(() =>
        renderToString((
            <App classNames={classNames} />
        ))
    );

    flush();

    return `
        <html>
            <head>
                <style type="text/css">${css}</style>
            </head>
            <body>${html}</body>
        </html>
    `;
};
