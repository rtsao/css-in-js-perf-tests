import cxs from 'cxs/optimized';
import { containerStyle, buttonStyles } from '../styles';
import { renderHtml } from '../render';

export const cxsOptimizedCase = () => {

    const getButtonClassName = i => cxs(buttonStyles[i]);

    const html = renderHtml(cxs(containerStyle), getButtonClassName);

    const { css } = cxs;

    cxs.reset();

    return `
        <html>
            <head>
                <style type="text/css">${css}</style>
            </head>
            <body>${html}</body>
        </html>
    `;
};
