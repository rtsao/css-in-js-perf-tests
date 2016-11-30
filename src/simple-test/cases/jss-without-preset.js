import { create } from 'jss';
import camelCase from 'jss-camel-case';
import { renderHtml } from './render';
import { styles } from '../styles';

export const jssWithoutPresetCase = () => {
    const jss = create();
    jss.use(camelCase());

    const { classes: { container, button } } = jss.createStyleSheet(styles).attach();

    const renderedHtml = renderHtml({
        container,
        button,
    });

    const css = jss.sheets.toString();

    return `
        <html>
            <head>
                <style type="text/css">${css}</style>
            </head>
            <body>${renderedHtml}</body>
        </html>
    `;
};
