import {widthUnit} from '../../styles/constants';
import {exerciseTextSpacing, islandSpacing} from '../../styles/spacings';
import {islandShape, islandCarouselItem} from '../../styles/standardComponents';

const styles = {
  parentContainer: {
    flex: 1,
    ...islandShape,
    marginVertical: islandSpacing.margin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: islandSpacing.padding,
    ...islandShape,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemBlocker: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    ...exerciseTextSpacing,
    paddingTop: widthUnit * 25,
    ...islandShape,
    backgroundColor: '#33333366',
  },
  headingContainer: {
    width: islandCarouselItem.width - islandSpacing.padding * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headingTextContainer: {},
};

export default styles;
