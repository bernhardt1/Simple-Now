import {
  headerContentStatusBarPadding,
  headerPaddingHorizontal,
  headerContentPaddingHorizontal,
} from '../../styles/spacings';
import {screenWidth} from '../../styles/constants';

const styles = {
  container: {
    ...headerContentStatusBarPadding,
    ...headerPaddingHorizontal,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  backButtonContainer: {
    flex: 1,
    width: screenWidth,
    ...headerPaddingHorizontal,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  contentContainer: {
    flex: 2,
    width: screenWidth,
    ...headerContentPaddingHorizontal,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  subheadingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default styles;
