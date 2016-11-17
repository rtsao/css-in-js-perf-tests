import React, { Component } from 'react';
import { Button } from './Button';

export const App = ({ classNames }) => (
    <html className={classNames.html}>
        <head>
            <title>React test</title>
        </head>
        <body className={classNames.body}>
            <Button classNames={classNames.button}>
                Test button
            </Button>
        </body>
    </html>
);
