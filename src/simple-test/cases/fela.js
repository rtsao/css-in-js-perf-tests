import { createRenderer } from 'fela';
import { renderHtml } from '../render';
import { containerStyle, buttonStyle } from '../styles';

export const felaCase = () => {
  const renderer = createRenderer();

  const html = renderHtml(
    renderer.renderRule(() => containerStyle),
    renderer.renderRule(() => buttonStyle)
  );

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
