import Styletron from 'styletron-server';
import { injectStyle } from 'styletron-utils';
import { renderHtml } from '../render';
import { containerStyle, buttonStyle } from '../styles';

export const styletronCase = () => {
    const styletron = new Styletron();

    const html = renderHtml(
        injectStyle(styletron, containerStyle),
        injectStyle(styletron, buttonStyle)
    );

    const css = styletron.getCss();

    return `
        <html>
            <head>
                <style type="text/css">${css}</style>
            </head>
            <body>${html}</body>
        </html>
    `;
};
