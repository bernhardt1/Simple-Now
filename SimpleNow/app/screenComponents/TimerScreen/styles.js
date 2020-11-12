import { BRAND_BLACK, BRAND_WHITE, DARK_OVERLAY } from '../../styles/colors';
import {
  screenWidth,
  statusBarHeight,
  widthUnit,
  heightUnit,
} from '../../styles/constants';
import { islandSpacing } from '../../styles/spacings';
import { shadow } from '../../styles/standardComponents';

const styles = {
  container: {
    flex: 1,
  },
  headerSpacing: {
    height: statusBarHeight,
    width: screenWidth,
  },
  containerHeader: {
    flexDirection: 'row',
    width: screenWidth,
    height: heightUnit * 7,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: heightUnit * 2,
    justifyContent: 'space-between',
  },
  containerContent: {
    flex: 1,
    ...islandSpacing,
    justifyContent: 'flex-end',
  },
  countdownContainer: {
    marginBottom: heightUnit * 6,
    marginTop: heightUnit * 4,
  },
  countdownClocksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeBarContainer: {
    width: screenWidth - (islandSpacing.margin + islandSpacing.padding) * 2,
    height: widthUnit,
    backgroundColor: BRAND_WHITE,
    borderRadius: widthUnit / 2,
  },
  progressTracker: {
    position: 'absolute',
    top: (-widthUnit * 2) / 2,
    left: (-widthUnit * 3) / 2,
    height: widthUnit * 3,
    width: widthUnit * 3,
    borderRadius: (widthUnit * 3) / 2,
    backgroundColor: BRAND_WHITE,
    ...shadow,
  },
};

export default styles;
