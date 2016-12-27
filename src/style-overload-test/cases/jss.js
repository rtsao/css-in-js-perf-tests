import { create } from 'jss';
import cache from 'jss-cache';
import preset from 'jss-preset-default';
import { stylesheet, buttonClassNames } from '../styles';
import { renderHtml, renderBody } from '../render';

const settings = preset();
settings.plugins.unshift(cache());

export const jssCase = (caseName) => {
    const jss = create(settings);

    const sheet = jss.createStyleSheet(stylesheet).attach();
    const { classes } = sheet;

    const getButtonClassName = i => classes[buttonClassNames[i]];

    const html = renderBody(caseName, classes.container, getButtonClassName);
    const css = sheet.toString();

    return renderHtml(css, html);
};
