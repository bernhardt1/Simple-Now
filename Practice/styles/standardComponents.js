import {screenWidth, widthUnit, BORDER_RADIUS} from './constants';
import {islandSpacing, standardButtonSpacing} from './spacings';
import {BRAND_WHITE, BRAND_BLACK} from './colors';

// islands
const islandShape = {
  borderRadius: BORDER_RADIUS,
};
const islandCarouselItem = {
  width: screenWidth - islandSpacing.margin * 3,
};

// Buttons
const standardButton = {
  height: widthUnit * 10,
  minWidth: widthUnit * 20,
  borderRadius: BORDER_RADIUS,
  backgroundColor: BRAND_WHITE,
  ...standardButtonSpacing,
  justifyContent: 'center',
  alignItems: 'center',
};

export {islandShape, standardButton, islandCarouselItem};
