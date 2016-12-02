import { ITERATIONS } from './iterations';

export const containerStyle = {
    backgroundColor: 'red',
};

export const buttonStyles = Array(ITERATIONS).fill().map(_ => ({
    backgroundColor: 'blue',
}));

export const buttonClassNames = buttonStyles.map((_, i) =>
    `button-${i}`
);

let stylesheet = {
    container: containerStyle
};
for (let i = 0; i < buttonClassNames.length; i++) {
    stylesheet[buttonClassNames[i]] = buttonStyles[i];
}
export { stylesheet };
