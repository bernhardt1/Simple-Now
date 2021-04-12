import { BRAND_PURPLE } from '../../styles/colors';
import {
  BORDER_RADIUS,
  heightUnit,
  screenWidth,
  statusBarHeight,
  widthUnit,
} from '../../styles/constants';
import { textContainerSpacing } from '../../styles/spacings';
import {
  bigShadow,
  shadow,
  standardBorder,
  standardImageButton,
} from '../../styles/standardComponents';

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

  scrollView: {
    flex: 1,
    backgroundColor: 'transparent',
    ...textContainerSpacing,
  },
  checkItemRow: {
    flexDirection: 'row',
    width: screenWidth,
    marginBottom: widthUnit * 1,
  },
  checkImage: {
    height: Math.max(
      standardImageButton.height * 0.55,
      standardImageButton.minHeight * 0.55
    ),
    width: Math.max(
      standardImageButton.width * 0.55,
      standardImageButton.minWidth * 0.55
    ),
    marginRight: widthUnit * 3,
  },
  subscriptionButtonBadge: {
    position: 'absolute',
    top: widthUnit * 2,
    right: widthUnit * 2,
    padding: widthUnit * 2,
    paddingVertical: widthUnit / 2,
    backgroundColor: BRAND_PURPLE,
    borderRadius: 4,
    ...bigShadow,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default styles;
