import { DARK_OVERLAY } from '../../styles/colors';
import { heightUnit, screenWidth } from '../../styles/constants';

const styles = {
  container: {
    height: heightUnit * 10,
    width: screenWidth,
    backgroundColor: DARK_OVERLAY,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
};

export default styles;
