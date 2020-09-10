const {widthUnit} = require('../../styles/constants');

const styles = {
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: widthUnit * 8,
    width: widthUnit * 8,
    borderRadius: (widthUnit * 8) / 2,
  },
  image: {
    height: widthUnit * 6,
    width: widthUnit * 6,
  },
};

export default styles;
