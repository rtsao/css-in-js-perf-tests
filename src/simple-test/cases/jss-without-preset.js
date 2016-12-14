import { create } from 'jss';
import camelCase from 'jss-camel-case';
import { stylesheet } from '../styles';
import { renderHtml, renderBody } from '../render';

export const jssWithoutPresetCase = (caseName) => {
    const jss = create();
    jss.use(camelCase());

    const { classes: { container, button } } = jss.createStyleSheet(stylesheet).attach();

    const html = renderBody(caseName, container, button);

    const css = jss.sheets.toString();

    return renderHtml(css, html);
};
