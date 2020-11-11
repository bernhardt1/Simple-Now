import { BRAND_WHITE } from '../../styles/colors';
import { widthUnit } from '../../styles/constants';
import { practiceCarouselSpacing } from '../../styles/spacings';
import { islandShape } from '../../styles/standardComponents';

const styles = {
  container: {
    height: widthUnit * 35,
    width: widthUnit * 55,
    backgroundColor: BRAND_WHITE,
    ...practiceCarouselSpacing,
    ...islandShape,
    justifyContent: 'space-between',
  },
};

export default styles;
