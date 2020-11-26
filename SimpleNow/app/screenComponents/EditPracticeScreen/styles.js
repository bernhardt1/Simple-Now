import { BRAND_WHITE, DARK_OVERLAY } from '../../styles/colors';
import {
  screenWidth,
  statusBarHeight,
  widthUnit,
  heightUnit,
  BORDER_RADIUS,
} from '../../styles/constants';
import { islandSpacing } from '../../styles/spacings';

const styles = {
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: heightUnit * 4,
  },
  headerSpacing: {
    height: statusBarHeight,
    width: screenWidth,
  },
  containerHeader: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeContainer: {
    padding: heightUnit * 3,
    height: heightUnit * 22,
    width: heightUnit * 22,
    borderRadius: (heightUnit * 22) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DARK_OVERLAY,
  },
  scrollerContainer: {
    flex: 5,
  },
  scrollerTitleContainer: {
    marginHorizontal: islandSpacing.padding,
    borderTopColor: BRAND_WHITE,
    borderTopWidth: 1,
    justifyContent: 'center',
    paddingTop: heightUnit,
  },
  timerScrollerContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  momentItemContainer: {
    height: widthUnit * 14,
    borderRadius: BORDER_RADIUS,
    width: widthUnit * 16,
    marginRight: widthUnit * 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  durationItemContainer: {
    height: widthUnit * 14,
    borderRadius: BORDER_RADIUS,
    width: widthUnit * 20,
    marginRight: widthUnit * 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    marginHorizontal: islandSpacing.padding,
  },
};

export default styles;
