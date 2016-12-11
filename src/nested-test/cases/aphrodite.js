import { StyleSheet, css as aphroditeCss, StyleSheetServer, StyleSheetTestUtils } from 'aphrodite';
import { renderHtml } from '../render';
import { stylesheet } from '../styles';

export const aphroditeCase = () => {
    const useStyles = StyleSheet.create(stylesheet);

    const { html, css } = StyleSheetServer.renderStatic(() =>
        renderHtml(
            aphroditeCss(useStyles.container),
            aphroditeCss(useStyles.button),
        )
    );

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
