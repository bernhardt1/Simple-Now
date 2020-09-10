import {islandSpacing} from '../../styles/spacings';
import {islandShape} from '../../styles/standardComponents';

const styles = {
  container: {
    flex: 1,
    ...islandSpacing,
    ...islandShape,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  flexContainer: {
    flex: 1,
  },
};

export default styles;
