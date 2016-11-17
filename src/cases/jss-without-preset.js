import jss from 'jss';
import preset from 'jss-preset-default';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from '../components/App';
import { styles } from '../styles';

export const jssWithoutPresetCase = () => {
    // jss.setup(preset()); no preset

    const { classes: { container, button } } = jss.createStyleSheet(styles).attach();

    const renderedHtml = renderToString((
        <App classNames={{
            container,
            button,
        }} />
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
