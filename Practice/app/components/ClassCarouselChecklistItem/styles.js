import {BRAND_WHITE} from '../../styles/colors';
import {widthUnit} from '../../styles/constants';
import {buttonFromEdgeSpacing} from '../../styles/spacings';
import {
  informationalContainer,
  informationalImage,
} from '../../styles/standardComponents';

const styles = {
  container: {
    width: widthUnit * 22,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemImage: {
    height: informationalContainer.height,
    width: informationalContainer.height,
  },
  checkImage: {
    ...informationalImage,
  },
  checkContainer: {
    ...informationalContainer,
    backgroundColor: BRAND_WHITE,
    marginTop: buttonFromEdgeSpacing.padding,
  },
};

export default styles;
