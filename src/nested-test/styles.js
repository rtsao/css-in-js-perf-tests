export const containerStyle = {
  backgroundColor: 'blue',
  textAlign: 'center',
  padding: 50,
  ':hover': {
    color: 'red',
    fontSize: 12,
    ':active': {
      color: 'blue'
    }
  },
  '@media (min-height: 300px)': {
    backgroundColor: 'red',
    textAlign: 'left',
    ':hover': {
      color: 'blue'
    }
  }
};

export const buttonStyle = {
  color: 'red',
  fontSize: 30,
  border: '3px solid yellow',
  '@media (min-height: 300px)': {
    color: 'blue'
  }
};

export const stylesheet = {
  container: containerStyle,
  button: buttonStyle
};
