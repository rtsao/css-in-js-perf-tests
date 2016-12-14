import FreeStyle from 'free-style';
import { containerStyle, buttonStyle } from '../styles';
import { renderHtml, renderBody } from '../render';

export const freeStyleCase = (caseName) => {
    const Style = FreeStyle.create();

    const options = { prefixPseudo: true };
    const html = renderBody(
        caseName,
        Style.registerStyle(containerStyle),
        Style.registerStyle(buttonStyle)
    );

    const css = Style.getStyles();

    return renderHtml(css, html);
};
