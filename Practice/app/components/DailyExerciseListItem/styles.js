import {itemSpacing} from '../../styles/spacings';
import {widthUnit, BORDER_RADIUS} from '../../styles/constants';
import {BRAND_BLACK} from '../../styles/colors';

const styles = {
  container: {
    height: widthUnit * 25,
    flexDirection: 'row',
    ...itemSpacing,
  },
  imageContainer: {
    height: widthUnit * 25,
    width: widthUnit * 25,
    borderRadius: BORDER_RADIUS,
    borderColor: BRAND_BLACK,
    borderWidth: 3,
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
  informationContainer: {
    flex: 1,
    marginLeft: itemSpacing.margin,
    marginVertical: itemSpacing.margin / 2,
    alignSelf: 'stretch',
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
  informationBottomContainer: {
    flex: 1,
    alignSelf: 'stretch',
  },
};

export default styles;
