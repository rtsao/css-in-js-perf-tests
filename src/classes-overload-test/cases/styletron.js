import Styletron from 'styletron-server';
import { injectStyle } from 'styletron-utils';
import { renderHtml } from '../render';
import { containerStyle, buttonStyles } from '../styles';

export const styletronCase = () => {
    const styletron = new Styletron();

    const getButtonClassName = i => injectStyle(styletron, buttonStyles[i]);

    const html = renderHtml(injectStyle(styletron, containerStyle), getButtonClassName);

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
