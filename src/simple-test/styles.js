// Add units to padding and fontSize,
// as fela, styletron and jss-witout-preset leave raw numbers as is (not adding px),
// which is incorrect CSS (Chrome doesn't care, Firefox warns against them).
// I prefer explicit unit, anyway...
export const containerStyle = {
    backgroundColor: 'rebeccapurple',
    textAlign: 'center',
    padding: '50px',
};

export const buttonStyle = {
    backgroundColor: 'turquoise',
    fontSize: '30px',
    border: '3px solid yellow',
};

export const stylesheet = {
    container: containerStyle,
    button: buttonStyle,
};
