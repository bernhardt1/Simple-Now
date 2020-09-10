import {widthUnit} from './constants';
import {statusBarHeight} from './constants';

const logoTitleSpacing = {
  marginHorizontal: widthUnit * 20,
};

// Header Spacings
const headerContentStatusBarPadding = {
  paddingTop: statusBarHeight,
};
const headerPaddingHorizontal = {
  paddingHorizontal: widthUnit * 4,
};
const headerContentPaddingHorizontal = {
  paddingHorizontal: widthUnit * 10,
};

// Button Spacings
const standardButtonSpacing = {
  margin: widthUnit * 4,
  padding: widthUnit * 2,
};

// Island Spacings
const islandSpacing = {
  alignSelf: 'stretch',
  margin: widthUnit * 6,
  padding: widthUnit * 4,
};

// Text Container Spacings
const textContainerSpacing = {
  padding: widthUnit * 4,
};

// ScrollView Bottom Spacing
const scrollViewBottomMargin = {
  marginBottom: widthUnit * 24,
};

export {
  logoTitleSpacing,
  headerContentStatusBarPadding,
  headerContentPaddingHorizontal,
  standardButtonSpacing,
  headerPaddingHorizontal,
  islandSpacing,
  textContainerSpacing,
  scrollViewBottomMargin,
};
