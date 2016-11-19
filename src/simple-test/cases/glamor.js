import { renderStatic } from 'glamor/server';
import { style, flush } from 'glamor';
import { renderHtml } from './render';
import { styles } from '../styles';

export const glamorCase = () => {
    const classNames = {
        container: style(styles.container),
        button: style(styles.button),
    };

    const { html, css } = renderStatic(() =>
        renderHtml({
            container: classNames.container,
            button: classNames.button,
        })
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
