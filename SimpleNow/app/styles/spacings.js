import { widthUnit } from './constants';
import { statusBarHeight } from './constants';

const logoTitleSpacing = {
  marginHorizontal: widthUnit * 20,
};
const titleVerticalSpacing = {
  marginBottom: widthUnit * 2,
};

// Header Spacings
const headerContentStatusBarPadding = {
  paddingTop: statusBarHeight,
};
const headerPaddingHorizontal = {
  paddingHorizontal: widthUnit * 2,
};
const headerContentPaddingHorizontal = {
  paddingHorizontal: widthUnit * 10,
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

// Carousel Spacings
const courseItemCarouselSpacing = {
  margin: widthUnit,
  padding: widthUnit * 2,
};

const practiceCarouselSpacing = {
  marginLeft: widthUnit * 3,
  marginTop: widthUnit * 2,
  marginBottom: widthUnit * 4,
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
const exerciseTextSpacing = {
  padding: widthUnit * 18,
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
  logoTitleSpacing,
  titleVerticalSpacing,
  headerContentStatusBarPadding,
  headerContentPaddingHorizontal,
  standardButtonSpacing,
  standardSettingButtonSpacing,
  headerPaddingHorizontal,
  courseItemCarouselSpacing,
  practiceCarouselSpacing,
  islandSpacing,
  bigIslandSpacing,
  itemSpacing,
  textContainerSpacing,
  exerciseTextSpacing,
  buttonFromEdgeSpacing,
  verticalButtonsMargin,
  scrollViewBottomMargin,
};
