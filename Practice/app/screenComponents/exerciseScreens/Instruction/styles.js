import { DARK_OVERLAY } from '../../../styles/colors';
import { textContainerSpacing } from '../../../styles/spacings';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerDarken: {
    flex: 1,
    backgroundColor: DARK_OVERLAY,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    ...textContainerSpacing,
    justifyContent: 'center',
  },
};

export default styles;
