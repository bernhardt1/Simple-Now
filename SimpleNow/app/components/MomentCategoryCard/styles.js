import { BRAND_WHITE } from '../../styles/colors';
import { widthUnit } from '../../styles/constants';
import { practiceCarouselSpacing } from '../../styles/spacings';
import { islandShape, standardBorder } from '../../styles/standardComponents';

const styles = {
  selected: {
    ...standardBorder,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
};

export default styles;
