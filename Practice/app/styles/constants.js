import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const screenWidth = Dimensions.get('window').width;
const widthUnit = screenWidth / 100;
const statusBarHeight = getStatusBarHeight();

const BORDER_RADIUS = 10;
const BORDER_WIDTH = 3;

export {screenWidth, widthUnit, statusBarHeight, BORDER_RADIUS, BORDER_WIDTH};