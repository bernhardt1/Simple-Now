import { itemSpacing } from '../../styles/spacings';
import { widthUnit, BORDER_RADIUS, BORDER_WIDTH } from '../../styles/constants';
import { BRAND_WHITE, DARK_OVERLAY } from '../../styles/colors';
import { islandShape } from '../../styles/standardComponents';

const styles = {
  container: {
    height: widthUnit * 25,
    flexDirection: 'row',
    ...itemSpacing,
    ...islandShape,
    backgroundColor: DARK_OVERLAY,
  },
  focusedContainer: {
    height: widthUnit * 60,
    ...itemSpacing,
    ...islandShape,
    margin: itemSpacing.margin / 1.5,
    marginTop: itemSpacing.margin,
    borderColor: BRAND_WHITE,
    borderWidth: BORDER_WIDTH,
    backgroundColor: DARK_OVERLAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: widthUnit * 25,
    width: widthUnit * 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainerComplete: {
    height: widthUnit * 25,
    width: widthUnit * 25,
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: widthUnit * 18,
    width: widthUnit * 18,
  },
  focusedImageContainer: {
    flexDirection: 'row',
    height: widthUnit * 30,
    width: widthUnit * 30,
    paddingTop: itemSpacing.margin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusedImage: {
    height: widthUnit * 25,
    width: widthUnit * 25,
  },
  informationContainer: {
    flex: 1,
    marginLeft: itemSpacing.margin,
    marginVertical: itemSpacing.margin,
    alignSelf: 'stretch',
  },
  focusedInformationContainer: {
    flex: 1,
    margin: itemSpacing.margin,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  informationTopContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  informationTextContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  informationBottomContainer: {},
};

export default styles;
