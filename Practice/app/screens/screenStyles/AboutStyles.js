import {BRAND_WHITE} from '../../styles/colors';
import {textContainerSpacing} from '../../styles/spacings';

const styles = {
  container: {
    flex: 1,
    backgroundColor: BRAND_WHITE,
  },
  scrollView: {
    flex: 1,
    ...textContainerSpacing,
  },
};

export default styles;
