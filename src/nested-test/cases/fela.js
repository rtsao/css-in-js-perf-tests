import { createRenderer } from 'fela';
import { createContainerStyle, createButtonStyle } from '../styles';
import { renderHtml, renderBody } from '../render';

export const felaCase = (caseName) => {
    const renderer = createRenderer();

    const html = renderBody(
        caseName,
        renderer.renderRule(() => createContainerStyle()),
        renderer.renderRule(() => createButtonStyle())
    );

    const css = renderer.renderToString();

    return renderHtml(css, html);
};
