import React from 'react';
import { renderToString } from 'react-dom/server';
import { StyleSheet, css as aphroditeCss, StyleSheetServer, StyleSheetTestUtils } from 'aphrodite';
import { App } from '../components/App';
import { generateStyles } from '../styles';

export const aphroditeCase = () => {
    const useStyles = StyleSheet.create(generateStyles());



    const { html, css } = StyleSheetServer.renderStatic(() => {
        const classNames = {};
        for (let className in useStyles) {
            classNames[className] = aphroditeCss(useStyles[className]);
        }

        renderToString((
            <App classNames={classNames} />
        ))
    });

    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();

    return `
        <html>
            <head>
                <style type="text/css">${css.content}</style>
            </head>
            <body>${html}</body>
        </html>
    `;
};
