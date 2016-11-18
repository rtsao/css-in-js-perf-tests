import cxs from 'cxs';
import { renderHtml } from './render';
import { styles } from '../styles';

export const cxsCase = () => {
    const classNames = {
        container: cxs(styles.container),
        button: cxs(styles.button),
    };

    const html = renderHtml({
        container: classNames.container,
        button: classNames.button,
    });

    const { css } = cxs;

    cxs.reset();

    return `
        <html>
            <head>
                <style type="text/css">${css}</style>
            </head>
            <body>${html}</body>
        </html>
    `;
};
