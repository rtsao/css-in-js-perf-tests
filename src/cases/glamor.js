import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from '../components/App';
import { styles } from '../styles';
import { renderStatic } from 'glamor/server';
import { style, flush } from 'glamor';

export const glamorCase = () => {
    const classNames = {
        container: style(styles.container),
        button: style(styles.button),
    };

    const { html, css } = renderStatic(() =>
        renderToString((
            <App classNames={{
                container: classNames.container,
                button: classNames.button,
            }} />
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
