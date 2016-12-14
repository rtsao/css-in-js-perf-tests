import { create } from 'jss';
import nested from 'jss-nested';
import camelCase from 'jss-camel-case';
import { createStylesheet } from '../styles';
import { renderHtml, renderBody } from '../render';

export const jssWithoutPresetCase = (caseName) => {
    const jss = create();
    jss.use(nested());
    jss.use(camelCase());

    const options = { prefixPseudo: true };
    const { classes: { container, button } } = jss.createStyleSheet(createStylesheet(options)).attach();

    const html = renderBody(caseName, container, button);

    const css = jss.sheets.toString();

    return renderHtml(css, html);
};
