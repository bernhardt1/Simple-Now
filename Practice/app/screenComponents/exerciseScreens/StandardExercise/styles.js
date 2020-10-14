import { BRAND_WHITE, DARK_OVERLAY } from '../../../styles/colors';
import {
  screenWidth,
  statusBarHeight,
  widthUnit,
  heightUnit,
} from '../../../styles/constants';

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
    height: heightUnit * 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
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
    // backgroundColor: '#ffffff55',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: widthUnit * 15,
  },
  simpleContainer: {
    position: 'absolute',
    top: heightUnit * 40,
    left: widthUnit * 0,
    width: widthUnit * 100,
    height: heightUnit * 50,
    // backgroundColor: '#ffffff55',
  },
  simpleCircle: {
    position: 'absolute',
    top: screenWidth / 2 - (widthUnit * 60) / 2,
    left: screenWidth / 2 - (widthUnit * 60) / 2,
    width: widthUnit * 60,
    height: widthUnit * 60,
    backgroundColor: 'transparent',
    borderColor: BRAND_WHITE,
    borderWidth: 3,
    borderRadius: (widthUnit * 60) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  simpleInnerRing: {
    position: 'absolute',
    top: screenWidth / 2 - (widthUnit * 60) / 2,
    left: screenWidth / 2 - (widthUnit * 60) / 2,
    width: widthUnit * 60,
    height: widthUnit * 60,
    backgroundColor: 'transparent',
    borderColor: BRAND_WHITE,
    borderWidth: 1,
    borderRadius: (widthUnit * 60 * 1.25) / 2,
    borderStyle: 'dashed',
  },
  simpleOuterRing: {
    position: 'absolute',
    top: screenWidth / 2 - (widthUnit * 60 * 1.25) / 2,
    left: screenWidth / 2 - (widthUnit * 60 * 1.25) / 2,
    width: widthUnit * 60 * 1.25,
    height: widthUnit * 60 * 1.25,
    backgroundColor: 'transparent',
    borderColor: BRAND_WHITE,
    borderWidth: 1,
    borderRadius: (widthUnit * 60 * 1.25) / 2,
    borderStyle: 'dashed',
  },
};

export default styles;