import jss from 'jss';
import preset from 'jss-preset-default';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from '../components/App';
import { styles } from '../styles';

export const jssCase = () => {
    jss.setup(preset());

    const { classes: { html, body, button } } = jss.createStyleSheet(styles).attach();

    const renderedHtml = renderToString((
        <App classNames={{
            html,
            body,
            button,
        }} />
    ));

    const css = jss.sheets.toString();

    return { html: renderedHtml, css };
};
