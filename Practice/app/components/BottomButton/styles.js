import { DARK_OVERLAY } from '../../styles/colors';
import { screenWidth, widthUnit } from '../../styles/constants';
import { bottomButton } from '../../styles/standardComponents';

const styles = {
  buttonContainer: {
    height: bottomButton.height,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginBottom: widthUnit * 20,
    ...bottomButton,
    backgroundColor: DARK_OVERLAY,
  },
  image: {
    height: bottomButton.height * 0.75,
    width: bottomButton.height * 0.75,
  },
};

export default styles;
