import { ITERATIONS } from '.';

export const generateStyles = () => {
    const styles = {
        container: {
            backgroundColor: 'red',
        },
    };

    for (let i = 0; i < ITERATIONS; i++) {
        styles[`button-${i}`] = {
            backgroundColor: 'blue',
            paddingLeft: i
        };
    }

    return styles;
};
