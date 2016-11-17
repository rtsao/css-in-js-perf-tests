import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from '../components/App';
import { styles } from '../styles';
import { renderStatic } from 'glamor/server';
import { style } from 'glamor';

export const glamorCase = () => {
    const useStyles = {
        html: style(styles.html),
        body: style(styles.body),
        button: style(styles.button),
    };

    return renderStatic(() =>
        renderToString((
            <App classNames={{
                html: useStyles.html,
                body: useStyles.body,
                button: useStyles.button,
            }} />
        ))
    );
};
