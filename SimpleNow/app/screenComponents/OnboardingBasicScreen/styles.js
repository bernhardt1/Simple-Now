import { heightUnit } from '../../styles/constants';
import { bigIslandSpacing, islandSpacing } from '../../styles/spacings';

const styles = {
  container: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topSection: {
    ...bigIslandSpacing,
  },
  bottomSection: {
    ...bigIslandSpacing,
    marginBottom: heightUnit * 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default styles;
