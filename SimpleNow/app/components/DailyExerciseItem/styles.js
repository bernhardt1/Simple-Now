import { itemSpacing, textContainerSpacing } from '../../styles/spacings';
import { widthUnit } from '../../styles/constants';
import { DARK_OVERLAY } from '../../styles/colors';
import { islandShape } from '../../styles/standardComponents';

const styles = {
  container: {
    height: widthUnit * 20,
    flexDirection: 'row',
    alignSelf: 'stretch',
    ...itemSpacing,
    ...textContainerSpacing,
    ...islandShape,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: DARK_OVERLAY,
  },
  informationLeftContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
};

export default styles;
