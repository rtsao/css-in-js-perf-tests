import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from '../components/App';
import { styles } from '../styles';
import { renderStatic } from 'glamor/server';
import { style } from 'glamor';

export const glamorCase = () => {
    const classNames = {
        html: style(styles.html),
        body: style(styles.body),
        button: style(styles.button),
    };

    return renderStatic(() =>
        renderToString((
            <App classNames={{
                html: classNames.html,
                body: classNames.body,
                button: classNames.button,
            }} />
        ))
    );
};
