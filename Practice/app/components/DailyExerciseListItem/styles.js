import { itemSpacing } from '../../styles/spacings';
import { widthUnit, BORDER_RADIUS } from '../../styles/constants';
import { BRAND_BLACK, DARK_OVERLAY } from '../../styles/colors';
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
    height: widthUnit * 50,
    ...itemSpacing,
    margin: itemSpacing.margin / 1.5,
    marginBottom: itemSpacing.margin,
    ...islandShape,
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
  focusedImageContainerComplete: {
    flexDirection: 'row',
    height: widthUnit * 30,
    width: widthUnit * 30,
    borderRadius: BORDER_RADIUS,
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  informationTopTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: widthUnit * 45,
  },
  informationTopCompleteContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: widthUnit * 5,
    width: widthUnit * 5,
    borderRadius: (widthUnit * 5) / 2,
    backgroundColor: BRAND_BLACK,
  },
  informationTopCompleteImage: {
    height: widthUnit * 4,
    width: widthUnit * 4,
  },
  informationBottomContainer: {},
};

export default styles;
