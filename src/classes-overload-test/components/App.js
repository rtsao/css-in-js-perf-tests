import React, { Component } from 'react';
import { Button } from './Button';
import { ITERATIONS } from '..';

export const App = ({ classNames }) => (
    <section className={classNames.container}>
        {(() => {
            const buttons = [];

            for (let i = 0; i < 100; i++) {
                buttons.push(
                    <Button className={classNames[`button-${i}`]}>
                        Test button
                    </Button>
                );
            }

            return buttons;
        })()}
    </section>
);
