import {
  screenWidth,
  widthUnit,
  BORDER_RADIUS,
  headerHeight,
} from './constants';
import {
  buttonFromEdgeSpacing,
  headerPaddingHorizontal,
  islandSpacing,
  standardButtonSpacing,
} from './spacings';
import { BRAND_BLACK, BRAND_WHITE, DARK_OVERLAY } from './colors';

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
const islandCarouselItem = {
  width: screenWidth - islandSpacing.margin * 3,
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
  height: widthUnit * 11,
  minWidth: widthUnit * 20,
  borderRadius: BORDER_RADIUS,
  backgroundColor: DARK_OVERLAY,
  ...standardButtonSpacing,
  justifyContent: 'center',
  alignItems: 'center',
};

const standardImageButton = {
  height: widthUnit * 8,
  width: widthUnit * 8,
  minWidth: 30,
  minHeight: 30,
  borderRadius: Math.max((widthUnit * 8) / 2, 30 / 2),
  justifyContent: 'center',
  alignItems: 'center',
};

const bottomButton = {
  height: widthUnit * 36,
  width: widthUnit * 36,
  borderRadius: (widthUnit * 36) / 2,
  justifyContent: 'center',
  alignItems: 'center',
};

// Informational Components
const informationalContainer = {
  height: widthUnit * 10,
  width: widthUnit * 10,
  borderRadius: (widthUnit * 10) / 2,
  justifyContent: 'center',
  alignItems: 'center',
};
const informationalImage = {
  height: widthUnit * 8,
  width: widthUnit * 8,
};

// animatedBottomButton
const animatedBottomButtonStyles = {
  container: {
    ...bottomButton,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BRAND_BLACK,
  },
  gradientContainer: {
    position: 'absolute',
    ...bottomButton,
    width: bottomButton.width * 2,
    left: -screenWidth,
  },
  image: {
    height: bottomButton.height * 0.75,
    width: bottomButton.height * 0.75,
  },
};

//Flair
const standardFlair = {
  backgroundColor: BRAND_WHITE,
  borderRadius: BORDER_RADIUS,
  justifyContent: 'center',
  alignItems: 'center',
  padding: widthUnit,
  paddingHorizontal: buttonFromEdgeSpacing.padding,
};

export {
  defaultHeader,
  scrollViewContainerIsland,
  islandShape,
  standardButton,
  bottomButton,
  standardImageButton,
  islandCarouselItem,
  animatedBottomButtonStyles,
  informationalContainer,
  informationalImage,
  standardFlair,
};
