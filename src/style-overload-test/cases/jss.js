import { create } from 'jss';
import preset from 'jss-preset-default';
import { stylesheet, buttonClassNames } from '../styles';
import { renderHtml, renderBody } from '../render';

export const jssCase = (caseName) => {
    const jss = create(preset());

    const { classes } = jss.createStyleSheet(stylesheet).attach();

    const getButtonClassName = i => classes[buttonClassNames[i]];

    const html = renderBody(caseName, classes.container, getButtonClassName);
    const css = jss.sheets.toString();

    return renderHtml(css, html);
};
