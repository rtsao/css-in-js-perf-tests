import React, { Component } from 'react';
import { Button } from './Button';

export const App = ({ classNames }) => (
    <section className={classNames.container}>
        <Button className={classNames.button}>
            Test button
        </Button>
    </section>
);
