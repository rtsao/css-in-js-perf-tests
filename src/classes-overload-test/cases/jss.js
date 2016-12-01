import { create } from 'jss';
import preset from 'jss-preset-default';
import { renderHtml } from '../render';
import { stylesheet, buttonClassNames } from '../styles';

export const jssCase = () => {
    const jss = create(preset());

    const { classes } = jss.createStyleSheet(stylesheet).attach();

    const getButtonClassName = i => classes[buttonClassNames[i]];

    const html = renderHtml(classes.container, getButtonClassName);
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
