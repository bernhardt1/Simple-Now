import {
  BRAND_WHITE,
  DARK_OVERLAY,
  VERY_DARK_OVERLAY,
} from '../../../styles/colors';
import {
  screenWidth,
  statusBarHeight,
  widthUnit,
  heightUnit,
} from '../../../styles/constants';
import { shadow } from '../../../styles/standardComponents';

const styles = {
  container: {
    flex: 1,
  },
  containerDarken: {
    flex: 1,
    backgroundColor: DARK_OVERLAY,
  },
  headerSpacing: {
    height: statusBarHeight,
    // backgroundColor: 'white',
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
  volumeHeader: {
    flexDirection: 'row',
    width: screenWidth,
    height: heightUnit * 4,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'flex-end',
  },
  containerContent: {
    flex: 1,
  },
  textContainer: {
    position: 'absolute',
    top: heightUnit * 0,
    left: widthUnit * 0,
    width: widthUnit * 100,
    height: heightUnit * 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: widthUnit * 15,
  },
  addTimeContainer: {
    position: 'absolute',
    flexDirection: 'row',
    top: heightUnit * 30,
    left: widthUnit * 0,
    width: widthUnit * 100,
    height: heightUnit * 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: widthUnit * 10,
  },
  simpleContainer: {
    position: 'absolute',
    top: heightUnit * 35,
    left: widthUnit * 0,
    width: widthUnit * 100,
    height: heightUnit * 50,
  },
  simpleInnerRing: {
    position: 'absolute',
    top: screenWidth / 2 - (widthUnit * 55) / 2,
    left: screenWidth / 2 - (widthUnit * 55) / 2,
    width: widthUnit * 55,
    height: widthUnit * 55,
    backgroundColor: 'transparent',
    borderColor: BRAND_WHITE,
    borderWidth: 1,
    borderRadius: (widthUnit * 55 * 1.25) / 2,
    borderStyle: 'dashed',
  },
  simpleCircle: {
    position: 'absolute',
    top: screenWidth / 2 - (widthUnit * 55) / 2,
    left: screenWidth / 2 - (widthUnit * 55) / 2,
    width: widthUnit * 55,
    height: widthUnit * 55,
    backgroundColor: VERY_DARK_OVERLAY,
    borderColor: BRAND_WHITE,
    borderWidth: 3,
    borderRadius: (widthUnit * 55) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default styles;
