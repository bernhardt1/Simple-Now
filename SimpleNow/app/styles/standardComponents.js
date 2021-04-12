import {
  screenWidth,
  widthUnit,
  BORDER_RADIUS,
  headerHeight,
  BORDER_WIDTH,
  heightUnit,
} from './constants';
import {
  buttonFromEdgeSpacing,
  headerPaddingHorizontal,
  islandSpacing,
  practiceCarouselSpacing,
  standardButtonSpacing,
  standardSettingButtonSpacing,
  subscriptionInformativeSpacing,
} from './spacings';
import {
  BRAND_BLACK,
  BRAND_WHITE,
  DARK_OVERLAY,
  VERY_DARK_OVERLAY,
} from './colors';
import { footnoteFont } from './fonts';

// default header
const defaultHeader = {
  height: headerHeight,
  width: screenWidth,
  backgroundColor: VERY_DARK_OVERLAY,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  ...headerPaddingHorizontal,
};

// islands
const islandShape = {
  borderRadius: BORDER_RADIUS,
};
const scrollViewContainerIsland = {
  flex: 1,
  alignSelf: 'stretch',
  margin: widthUnit * 2,
  marginBottom: widthUnit * 8,
  padding: widthUnit * 4,
  backgroundColor: DARK_OVERLAY,
  ...islandShape,
};

// Buttons
const standardButton = {
  height: widthUnit * 12,
  minWidth: widthUnit * 40,
  borderRadius: BORDER_RADIUS,
  ...standardButtonSpacing,
  justifyContent: 'center',
  alignItems: 'center',
};

const standardSettingButton = {
  minHeight: widthUnit * 9,
  minWidth: widthUnit * 20,
  borderRadius: BORDER_RADIUS,
  backgroundColor: DARK_OVERLAY,
  ...standardSettingButtonSpacing,
  justifyContent: 'center',
  alignItems: 'center',
  ...shadow,
};

const subscriptionInformativeButton = {
  minHeight: widthUnit * 15,
  minWidth: widthUnit * 20,
  borderRadius: BORDER_RADIUS,
  backgroundColor: VERY_DARK_OVERLAY,
  ...subscriptionInformativeSpacing,
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  ...bigShadow,
};

const standardImageButton = {
  height: widthUnit * 11,
  width: widthUnit * 11,
  minWidth: 30,
  minHeight: 30,
  borderRadius: Math.max((widthUnit * 11) / 2, 30 / 2),
  justifyContent: 'center',
  alignItems: 'center',
};

const bottomButton = {
  minHeight: widthUnit * 10,
  minWidth: widthUnit * 24,
  borderRadius: (widthUnit * 10) / 2,
  justifyContent: 'center',
  alignItems: 'center',
};

// Informational Components
const informationalImage = {
  height: widthUnit * 8,
  width: widthUnit * 8,
};
const smallInformationIsland = {
  height: footnoteFont.fontSize + widthUnit * 4,
  width: footnoteFont.fontSize * 6,
  borderRadius: (footnoteFont.fontSize + widthUnit * 4) / 2,
  backgroundColor: DARK_OVERLAY,
  padding: widthUnit,
  justifyContent: 'center',
  alignItems: 'center',
};

// Program Info Card
const programInfoCard = {
  height: widthUnit * 24,
  width: widthUnit * 24,
  backgroundColor: BRAND_WHITE,
  marginRight: widthUnit * 3,
  padding: widthUnit * 3,
  ...islandShape,
  justifyContent: 'center',
  alignItems: 'center',
};

const meditationCard = {
  height: widthUnit * 40,
  width: widthUnit * 44,
  backgroundColor: BRAND_WHITE,
  ...practiceCarouselSpacing,
  ...islandShape,
  justifyContent: 'space-between',
  padding: 0,
};

// Moment Category Card
const momentCategoryCard = {
  height: widthUnit * 42.5,
  width: widthUnit * 42.5,
  backgroundColor: BRAND_WHITE,
  marginLeft: widthUnit * 5,

  padding: widthUnit * 3,
  ...islandShape,
  justifyContent: 'center',
  alignItems: 'center',
};

// Daily Exercist Item
const dailyExerciseItem = {
  justifyContent: 'center',
  alignItems: 'center',
  height: heightUnit * 35,
  width: widthUnit * 54,
  borderRadius: BORDER_RADIUS,
  backgroundColor: 'white',
  marginLeft: widthUnit * 4,
};

//Flair
const standardBorder = {
  borderWidth: BORDER_WIDTH,
  borderColor: BRAND_WHITE,
};

const shadow = {
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 1,
};

const iOSShadow = {
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
};

const bigShadow = {
  shadowColor: '#000000',
  shadowOffset: {
    width: 3,
    height: 4,
  },
  shadowOpacity: 0.66,
  shadowRadius: 6.22,

  elevation: 3,
};

const iOSBigShadow = {
  shadowColor: '#000000',
  shadowOffset: {
    width: 3,
    height: 4,
  },
  shadowOpacity: 0.66,
  shadowRadius: 6.22,
};

export {
  defaultHeader,
  scrollViewContainerIsland,
  islandShape,
  standardButton,
  standardSettingButton,
  subscriptionInformativeButton,
  bottomButton,
  standardImageButton,
  informationalImage,
  smallInformationIsland,
  programInfoCard,
  meditationCard,
  momentCategoryCard,
  dailyExerciseItem,
  standardBorder,
  shadow,
  bigShadow,
  iOSShadow,
  iOSBigShadow,
};
