import { BRAND_WHITE, DARK_OVERLAY } from '../../styles/colors';
import {
  screenWidth,
  statusBarHeight,
  widthUnit,
  heightUnit,
} from '../../styles/constants';

const styles = {
  container: {
    flex: 1,
    paddingVertical: heightUnit * 3,
  },
  headerSpacing: {
    height: statusBarHeight,
    width: screenWidth,
  },
  containerHeader: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeContainer: {
    padding: heightUnit * 3,
    height: heightUnit * 18,
    width: heightUnit * 18,
    borderRadius: (heightUnit * 18) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DARK_OVERLAY,
  },
  timerScrollerContainer: {
    flex: 2,
  },
  timerScrollerContentContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  timerItem: {
    height: heightUnit * 15,
    borderRadius: widthUnit,
    width: widthUnit * 2,
    backgroundColor: BRAND_WHITE,
    marginHorizontal: widthUnit * 2,
  },
  timerSelectedItem: {
    height: heightUnit * 18,
    width: widthUnit * 2,
    backgroundColor: BRAND_WHITE,
    marginHorizontal: widthUnit * 2,
  },
  footerContainer: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  standardSettingButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtons: {
    alignItems: 'flex-end',
    width: screenWidth,
    paddingHorizontal: heightUnit * 2,
  },
};

export default styles;
