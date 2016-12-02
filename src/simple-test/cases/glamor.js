import { renderStatic } from 'glamor/server';
import { style, flush } from 'glamor';
import { renderHtml } from '../render';
import { containerStyle, buttonStyle } from '../styles';

export const glamorCase = () => {

    const { html, css } = renderStatic(() =>
        renderHtml(style(containerStyle), style(buttonStyle))
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
