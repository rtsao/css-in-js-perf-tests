import { create } from 'jss';
import preset from 'jss-preset-default';
import { renderHtml } from '../render';
import { stylesheet } from '../styles';

export const jssCase = () => {
    const jss = create(preset());

    const { classes: { container, button } } = jss.createStyleSheet(stylesheet).attach();

    const html = renderHtml(container, button);

    const css = jss.sheets.toString();

    return `
        <html>
            <head>
                <style type="text/css">${css}</style>
            </head>
            <body>${html}</body>
        </html>
    `;
};
