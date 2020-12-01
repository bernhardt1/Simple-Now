import {
  screenWidth,
  widthUnit,
  BORDER_RADIUS,
  headerHeight,
  BORDER_WIDTH,
} from './constants';
import {
  buttonFromEdgeSpacing,
  headerPaddingHorizontal,
  islandSpacing,
  practiceCarouselSpacing,
  standardButtonSpacing,
  standardSettingButtonSpacing,
} from './spacings';
import { BRAND_BLACK, BRAND_WHITE, DARK_OVERLAY } from './colors';
import { footnoteFont } from './fonts';

// default header
const defaultHeader = {
  height: headerHeight,
  width: screenWidth,
  backgroundColor: DARK_OVERLAY,
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
  width: footnoteFont.fontSize + widthUnit * 4,
  borderRadius: (footnoteFont.fontSize + widthUnit * 4) / 2,
  backgroundColor: DARK_OVERLAY,
  padding: widthUnit,
  justifyContent: 'center',
  alignItems: 'center',
};

// Program Info Card
const programInfoCard = {
  height: widthUnit * 14,
  width: widthUnit * 14,
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
  ...shadow,
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

  elevation: 3,
};

export {
  defaultHeader,
  scrollViewContainerIsland,
  islandShape,
  standardButton,
  standardSettingButton,
  bottomButton,
  standardImageButton,
  informationalImage,
  smallInformationIsland,
  programInfoCard,
  meditationCard,
  momentCategoryCard,
  standardBorder,
  shadow,
};
