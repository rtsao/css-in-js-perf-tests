import { create } from 'jss';
import camelCase from 'jss-camel-case';
import { stylesheet, buttonClassNames } from '../styles';
import { renderHtml, renderBody } from '../render';

export const jssWithoutPresetCase = (caseName) => {
    const jss = create();
    jss.use(camelCase());

    const { classes } = jss.createStyleSheet(stylesheet).attach();

    const getButtonClassName = i => classes[buttonClassNames[i]];

    const html = renderBody(caseName, classes.container, getButtonClassName);
    const css = jss.sheets.toString();

    return renderHtml(css, html);
};
