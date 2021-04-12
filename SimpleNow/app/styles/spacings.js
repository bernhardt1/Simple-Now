import { widthUnit } from './constants';
import { statusBarHeight } from './constants';

// Header Spacings
const headerPaddingHorizontal = {
  paddingHorizontal: widthUnit * 4,
};

// Button Spacings
const standardButtonSpacing = {
  margin: widthUnit * 4,
  padding: widthUnit * 2,
  paddingHorizontal: widthUnit * 4,
};

const standardSettingButtonSpacing = {
  margin: widthUnit,
  padding: widthUnit,
  paddingHorizontal: widthUnit * 3,
};

const subscriptionInformativeSpacing = {
  padding: widthUnit * 3,
  paddingHorizontal: widthUnit * 4,
};

// Carousel Spacings
const practiceCarouselSpacing = {
  marginLeft: widthUnit * 4,
  padding: widthUnit * 3,
};

// Island Spacings
const islandSpacing = {
  alignSelf: 'stretch',
  margin: widthUnit * 6,
  padding: widthUnit * 4,
};
const bigIslandSpacing = {
  alignSelf: 'stretch',
  margin: widthUnit * 2,
  padding: widthUnit * 4,
};

// List Item Spacings
const itemSpacing = {
  alignSelf: 'stretch',
  margin: widthUnit * 4,
  marginBottom: 0,
};

// Container Spacings
const textContainerSpacing = {
  padding: widthUnit * 4,
};
const buttonFromEdgeSpacing = {
  padding: widthUnit * 2,
  paddingHorizontal: widthUnit * 3,
};
const verticalButtonsMargin = {
  marginBottom: widthUnit,
};

// ScrollView Bottom Spacing
const scrollViewBottomMargin = {
  marginBottom: widthUnit * 24,
};

export {
  standardButtonSpacing,
  standardSettingButtonSpacing,
  subscriptionInformativeSpacing,
  headerPaddingHorizontal,
  practiceCarouselSpacing,
  islandSpacing,
  bigIslandSpacing,
  itemSpacing,
  textContainerSpacing,
  buttonFromEdgeSpacing,
  verticalButtonsMargin,
  scrollViewBottomMargin,
};
