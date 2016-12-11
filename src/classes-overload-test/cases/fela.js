import { createRenderer } from 'fela';
import { renderHtml } from '../render';
import { containerStyle, buttonStyles } from '../styles';

export const felaCase = () => {
  const renderer = createRenderer();

  const getButtonClassName = i => renderer.renderRule(() => buttonStyles[i]);

  const html = renderHtml(renderer.renderRule(() => containerStyle), getButtonClassName);
  const css = renderer.renderToString();

  return `
        <html>
            <head>
                <style type="text/css">${css}</style>
            </head>
            <body>${html}</body>
        </html>
    `;
};
