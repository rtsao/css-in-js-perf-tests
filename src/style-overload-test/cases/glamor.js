import { renderStatic } from 'glamor/server';
import { style, flush } from 'glamor';
import { renderHtml } from '../render';
import { containerStyle, buttonStyles } from '../styles';

export const glamorCase = () => {

    const getButtonClassName = i => style(buttonStyles[i]);

    const { html, css } = renderStatic(() =>
        renderHtml(style(containerStyle), getButtonClassName)
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
