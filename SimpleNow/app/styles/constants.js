import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const statusBarHeight = getStatusBarHeight();
const headerHeight = 60;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height - statusBarHeight;
const heightUnit = screenHeight / 100;
const widthUnit = screenWidth / 100;

const BORDER_RADIUS = 10;
const BORDER_WIDTH = 3;

export {
  screenWidth,
  screenHeight,
  widthUnit,
  heightUnit,
  statusBarHeight,
  headerHeight,
  BORDER_RADIUS,
  BORDER_WIDTH,
};
