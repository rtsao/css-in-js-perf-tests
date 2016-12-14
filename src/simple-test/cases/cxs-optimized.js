import cxs from 'cxs/optimized';
import { containerStyle, buttonStyle } from '../styles';
import { renderHtml, renderBody } from '../render';

export const cxsOptimizedCase = (caseName) => {
    const html = renderBody(caseName, cxs(containerStyle), cxs(buttonStyle));

    const { css } = cxs;

    cxs.reset();

    return renderHtml(css, html);
};
