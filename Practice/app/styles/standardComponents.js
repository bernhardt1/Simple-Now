import { screenWidth, widthUnit, BORDER_RADIUS } from './constants';
import {
  buttonFromEdgeSpacing,
  islandSpacing,
  standardButtonSpacing,
} from './spacings';
import { BRAND_BLACK, BRAND_WHITE } from './colors';

// islands
const islandShape = {
  borderRadius: BORDER_RADIUS,
};
const islandCarouselItem = {
  width: screenWidth - islandSpacing.margin * 3,
};

// Buttons
const standardButton = {
  height: widthUnit * 11,
  minWidth: widthUnit * 20,
  borderRadius: BORDER_RADIUS,
  backgroundColor: BRAND_WHITE,
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
  height: widthUnit * 16,
  width: screenWidth,
  borderRadius: 0,
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
