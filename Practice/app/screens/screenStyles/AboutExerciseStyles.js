import { BRAND_BLACK } from '../../styles/colors';
import { textContainerSpacing } from '../../styles/spacings';

const styles = {
  container: {
    flex: 1,
    backgroundColor: BRAND_BLACK,
  },
  scrollView: {
    flex: 1,
    ...textContainerSpacing,
  },
};

export default styles;
