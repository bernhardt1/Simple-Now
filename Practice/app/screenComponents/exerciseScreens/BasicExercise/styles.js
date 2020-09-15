import {BRAND_WHITE} from '../../../styles/colors';
import {
  buttonFromEdgeSpacing,
  exerciseTextSpacing,
} from '../../../styles/spacings';

const styles = {
  container: {
    flex: 1,
    backgroundColor: BRAND_WHITE,
  },
  mainContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  topContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    ...buttonFromEdgeSpacing,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    ...exerciseTextSpacing,
  },
  bottomContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    ...buttonFromEdgeSpacing,
  },
};

export default styles;
