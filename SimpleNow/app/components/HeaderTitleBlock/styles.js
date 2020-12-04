import { DARK_OVERLAY, VERY_DARK_OVERLAY } from '../../styles/colors';
import { heightUnit, screenWidth } from '../../styles/constants';

const styles = {
  container: {
    // height: heightUnit * 10,
    // width: screenWidth,
    backgroundColor: VERY_DARK_OVERLAY,
    // justifyContent: 'flex-start',
    // alignItems: 'center',d
    paddingBottom: heightUnit * 3,
    paddingHorizontal: heightUnit * 3,
  },
  subtitleText: {
    textAlign: 'center',
  },
};

export default styles;
