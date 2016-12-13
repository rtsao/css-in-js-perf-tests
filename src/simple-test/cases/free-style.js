import FreeStyle from 'free-style';
import { renderHtml } from '../render';
import { containerStyle, buttonStyle } from '../styles';

export const freeStyleCase = () => {
    const Style = FreeStyle.create();

    const html = renderHtml(
        Style.registerStyle(containerStyle),
        Style.registerStyle(buttonStyle)
    );

    const css = Style.getStyles();

    return `
        <html>
            <head>
                <style type="text/css">${css}</style>
            </head>
            <body>${html}</body>
        </html>
    `;
};
