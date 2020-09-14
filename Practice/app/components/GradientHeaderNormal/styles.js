import {
  headerContentStatusBarPadding,
  headerPaddingHorizontal,
} from '../../styles/spacings';

const styles = {
  container: {
    flexDirection: 'row',
    ...headerContentStatusBarPadding,
    ...headerPaddingHorizontal,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

export default styles;
