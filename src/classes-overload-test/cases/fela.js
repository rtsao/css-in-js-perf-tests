import { createRenderer } from 'fela';
import { containerStyle, buttonStyles } from '../styles';
import { renderHtml, renderBody } from '../render';

export const felaCase = (caseName) => {
  const renderer = createRenderer();

  const getButtonClassName = i => renderer.renderRule(() => buttonStyles[i]);

  const html = renderBody(caseName, renderer.renderRule(() => containerStyle), getButtonClassName);
  const css = renderer.renderToString();

    return renderHtml(css, html);
};
