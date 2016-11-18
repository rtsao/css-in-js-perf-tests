import { create } from 'jss';
import preset from 'jss-preset-default';
import { renderHtml } from './render';
import { generateStyles } from '../styles';

export const jssCase = () => {
    const jss = create(preset());

    const { classes } = jss.createStyleSheet(generateStyles()).attach();

    const html = renderHtml(classes);

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
