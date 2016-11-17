import React from 'react';
import { renderToString } from 'react-dom/server';
import { StyleSheet, css, StyleSheetServer } from 'aphrodite';
import { App } from '../components/App';
import { styles } from '../styles';

const useStyles = StyleSheet.create(styles);

export const aphroditeCase = () => {
    return StyleSheetServer.renderStatic(() =>
        renderToString((
            <App classNames={{
                html: css(useStyles.html),
                body: css(useStyles.body),
                button: css(useStyles.button),
            }} />
        ))
    );
};
