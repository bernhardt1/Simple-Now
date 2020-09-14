import {bottomButton} from '../../styles/standardComponents';

const styles = {
  buttonContainer: {
    height: bottomButton.height,
    width: bottomButton.width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    ...bottomButton,
  },
  image: {
    height: bottomButton.height * 0.75,
    width: bottomButton.height * 0.75,
  },
};

export default styles;
