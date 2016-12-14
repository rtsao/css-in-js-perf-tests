import { renderStatic } from 'glamor/server';
import { style, flush } from 'glamor';
import { containerStyle, buttonStyle } from '../styles';
import { renderHtml, renderBody } from '../render';

export const glamorCase = (caseName) => {
    const { html, css } = renderStatic(() =>
        renderBody(caseName, style(containerStyle), style(buttonStyle))
    );

    flush();

    return renderHtml(css, html);
};
