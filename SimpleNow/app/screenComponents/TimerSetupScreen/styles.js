import { BRAND_WHITE, DARK_OVERLAY } from '../../styles/colors';
import { screenWidth, widthUnit, heightUnit } from '../../styles/constants';

const styles = {
  container: {
    flex: 1,
  },
  containerHeader: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: heightUnit * 3,
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
    marginBottom: heightUnit * 3,
  },
  bottomButtons: {
    alignItems: 'flex-end',
    width: screenWidth,
    paddingHorizontal: heightUnit * 2,
  },
};

export default styles;
