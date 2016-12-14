import cxs from 'cxs';
import { containerStyle, buttonStyle } from '../styles';
import { renderHtml, renderBody } from '../render';

export const cxsCase = (caseName) => {
    const html = renderBody(caseName, cxs(containerStyle), cxs(buttonStyle));

    const { css } = cxs;

    cxs.reset();

    return renderHtml(css, html);
};
