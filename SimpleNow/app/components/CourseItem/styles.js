import { DARK_OVERLAY } from '../../styles/colors';
import { widthUnit } from '../../styles/constants';
import { courseItemCarouselSpacing } from '../../styles/spacings';
import { islandShape } from '../../styles/standardComponents';

const styles = {
  container: {
    flex: 0.5,
    ...courseItemCarouselSpacing,
    ...islandShape,
    width: widthUnit * 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DARK_OVERLAY,
  },
  imageContainer: {
    ...islandShape,
  },
};

export default styles;
