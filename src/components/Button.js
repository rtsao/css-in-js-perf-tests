import React from 'react';

export const Button = ({ classNames, children }) => (
    <button className={classNames.button}>{children}</button>
);
