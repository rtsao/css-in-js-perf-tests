import React from 'react';
import { renderToString } from 'react-dom/server';
import cxs from 'cxs';
import { App } from '../components/App';
import { styles } from '../styles';

export const cxsCase = () => {
    const classNames = {
        html: cxs(styles.html),
        body: cxs(styles.body),
        button: cxs(styles.button),
    };

    const html = renderToString((
        <App classNames={{
            html: classNames.html,
            body: classNames.body,
            button: classNames.button,
        }} />
    ));

    const { css } = cxs;

    cxs.reset();

    return { html, css };
};
