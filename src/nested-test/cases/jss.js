import { create } from 'jss';
import preset from 'jss-preset-default';
import { createStylesheet } from '../styles';
import { renderHtml, renderBody } from '../render';

export const jssCase = (caseName) => {
    const jss = create(preset());

    const options = { prefixPseudo: true };
    const { classes: { container, button } } = jss.createStyleSheet(createStylesheet(options)).attach();

    const html = renderBody(caseName, container, button);

    const css = jss.sheets.toString();

    return renderHtml(css, html);
};
