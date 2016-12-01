import { StyleSheet, css as aphroditeCss, StyleSheetServer, StyleSheetTestUtils } from 'aphrodite';
import { renderHtml } from '../render';
import { stylesheet, buttonClassNames } from '../styles';

export const aphroditeCase = () => {
    const useStyles = StyleSheet.create(stylesheet);

    const getButtonClassName = i => aphroditeCss(useStyles[buttonClassNames[i]]);

    const { html, css } = StyleSheetServer.renderStatic(() => {
        return renderHtml(aphroditeCss(useStyles.container), getButtonClassName);
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
