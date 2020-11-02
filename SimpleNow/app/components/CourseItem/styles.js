import { DARK_OVERLAY } from '../../styles/colors';
import { carouselSpacing } from '../../styles/spacings';
import { islandShape } from '../../styles/standardComponents';

const styles = {
  container: {
    flex: 1,
    ...carouselSpacing,
    ...islandShape,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: DARK_OVERLAY,
  },
  imageContainer: {
    ...islandShape,
  },
  flexContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
};

export default styles;
