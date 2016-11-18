import { create } from 'jss';
import preset from 'jss-preset-default';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from '../components/App';
import { generateStyles } from '../styles';

export const jssWithoutPresetCase = () => {
    const jss = create();

    const { classes } = jss.createStyleSheet(generateStyles()).attach();

    const renderedHtml = renderToString((
        <App classNames={classes} />
    ));

    const css = jss.sheets.toString();

    return `
        <html>
            <head>
                <style type="text/css">${css}</style>
            </head>
            <body>${renderedHtml}</body>
        </html>
    `;
};
