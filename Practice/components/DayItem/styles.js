import {islandSpacing} from '../../styles/spacings';
import {islandShape, islandCarouselItem} from '../../styles/standardComponents';

const styles = {
  container: {
    flex: 1,
    marginVertical: islandSpacing.margin,
    padding: islandSpacing.padding,
    ...islandShape,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingContainer: {
    width: islandCarouselItem.width - islandSpacing.padding * 2,
  },
};

export default styles;
