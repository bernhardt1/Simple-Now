import { BRAND_WHITE } from '../../styles/colors';
import { widthUnit } from '../../styles/constants';
import { islandSpacing } from '../../styles/spacings';
import { islandShape, shadow } from '../../styles/standardComponents';

const styles = {
  container: {
    flexDirection: 'row',
    ...islandSpacing,
    padding: widthUnit * 3,
    paddingHorizontal: widthUnit * 4,
    marginTop: widthUnit * 4,
    marginBottom: 0,
    ...islandShape,
    height: widthUnit * 14,
    backgroundColor: BRAND_WHITE,
    ...shadow,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

export default styles;
