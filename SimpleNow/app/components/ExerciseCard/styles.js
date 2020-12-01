import { BORDER_RADIUS, BORDER_WIDTH, widthUnit } from '../../styles/constants';
import {
  BRAND_WHITE,
  DARK_OVERLAY,
  VERY_DARK_OVERLAY,
} from '../../styles/colors';
import { islandShape } from '../../styles/standardComponents';
import { captionFont } from '../../styles/fonts';

const nextIndicatorHeight = captionFont.fontSize * 1.4 + widthUnit;
const nextIndicatorWidth = captionFont.fontSize * 4;

const styles = {
  container: {
    marginLeft: widthUnit * 4,
    marginTop: widthUnit * 4,
    height: widthUnit * 20,
    width: widthUnit * 20,
    alignSelf: 'stretch',
  },
  exerciseContainer: {
    height: widthUnit * 20,
    width: widthUnit * 20,
    alignSelf: 'stretch',
    padding: widthUnit * 2,
    ...islandShape,
    backgroundColor: DARK_OVERLAY,
    borderColor: BRAND_WHITE,
    borderWidth: BORDER_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextIndicator: {
    position: 'absolute',
    paddingHorizontal: widthUnit,
    paddingVertical: widthUnit / 2,
    height: nextIndicatorHeight,
    width: nextIndicatorWidth,
    top: widthUnit * 20 - nextIndicatorHeight / 2,
    left: (widthUnit * 20) / 2 - nextIndicatorWidth / 2,
    backgroundColor: BRAND_WHITE,
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockerContainer: {
    position: 'absolute',
    height: widthUnit * 20,
    width: widthUnit * 20,
    ...islandShape,
    backgroundColor: VERY_DARK_OVERLAY,
  },
};

export default styles;
