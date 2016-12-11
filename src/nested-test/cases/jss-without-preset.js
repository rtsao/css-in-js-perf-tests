import { create } from 'jss';
import camelCase from 'jss-camel-case';
import { renderHtml } from '../render';
import { stylesheet } from '../styles';

export const jssWithoutPresetCase = () => {
    const jss = create();
    jss.use(camelCase());

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
