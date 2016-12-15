import { create } from 'jss';
import preset from 'jss-preset-default';
import { stylesheet } from '../styles';
import { renderHtml, renderBody } from '../render';

export const jssCase = (caseName) => {
    const jss = create(preset());

    const { classes: { container, button } } = jss.createStyleSheet(stylesheet).attach();

    const html = renderBody(caseName, container, button);

    const css = jss.sheets.toString();

    return renderHtml(css, html);
};
