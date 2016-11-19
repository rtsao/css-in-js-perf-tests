import { StyleSheet, css as aphroditeCss, StyleSheetServer, StyleSheetTestUtils } from 'aphrodite';
import { renderHtml } from './render';
import { styles } from '../styles';

export const aphroditeCase = () => {
    const useStyles = StyleSheet.create(styles);

    const { html, css } = StyleSheetServer.renderStatic(() =>
        renderHtml({
            container: aphroditeCss(useStyles.container),
            button: aphroditeCss(useStyles.button),
        }),
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
