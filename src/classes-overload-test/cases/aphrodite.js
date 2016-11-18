import { StyleSheet, css as aphroditeCss, StyleSheetServer, StyleSheetTestUtils } from 'aphrodite';
import { generateStyles } from '../styles';
import { renderHtml } from './render';

export const aphroditeCase = () => {
    const useStyles = StyleSheet.create(generateStyles());



    const { html, css } = StyleSheetServer.renderStatic(() => {
        const classNames = {};
        for (let className in useStyles) {
            classNames[className] = aphroditeCss(useStyles[className]);
        }

        return renderHtml(classNames);
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
