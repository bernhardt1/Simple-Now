import { textContainerSpacing } from '../../styles/spacings';
import { scrollViewContainerIsland } from '../../styles/standardComponents';

const styles = {
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    ...textContainerSpacing,
  },
  scrollViewContainer: {
    ...scrollViewContainerIsland,
  },
};

export default styles;
