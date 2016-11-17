import React from 'react';
import { renderToString } from 'react-dom/server';
import { StyleSheet, css as aphroditeCss, StyleSheetServer } from 'aphrodite';
import { App } from '../components/App';
import { styles } from '../styles';

export const aphroditeCase = () => {
    const useStyles = StyleSheet.create(styles);

    const { html, css } = StyleSheetServer.renderStatic(() =>
        renderToString((
            <App classNames={{
                container: aphroditeCss(useStyles.container),
                button: aphroditeCss(useStyles.button),
            }} />
        ))
    );

    return `
        <html>
            <head>
                <style type="text/css">${css.content}</style>
            </head>
            <body>${html}</body>
        </html>
    `;
};
