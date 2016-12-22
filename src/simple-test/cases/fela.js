import { createRenderer } from 'fela';
import { containerStyle, buttonStyle, notUsedStyle } from '../styles';
import { renderHtml, renderBody } from '../render';

export const felaCase = (caseName) => {
    const renderer = createRenderer();

    const html = renderBody(
        caseName,
        renderer.renderRule(() => containerStyle),
        renderer.renderRule(() => buttonStyle),
        renderer.renderRule(() => notUsedStyle)
    );

    const css = renderer.renderToString();

    return renderHtml(css, html);
};
