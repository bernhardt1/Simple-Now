import { DARK_OVERLAY, VERY_DARK_OVERLAY } from '../../styles/colors';
import { screenHeight, screenWidth, widthUnit } from '../../styles/constants';
import { bottomButton, standardBorder } from '../../styles/standardComponents';

const styles = {
  container: {
    ...bottomButton,
    backgroundColor: VERY_DARK_OVERLAY,
  },
  absoluteBottomButton: {
    position: 'absolute',
    top: screenHeight - bottomButton.height,
    left: screenWidth / 2 - bottomButton.height / 2,
  },
  image: {
    height: bottomButton.height * 0.75,
    width: bottomButton.height * 0.75,
  },
};

export default styles;
