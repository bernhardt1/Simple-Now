import {textContainerSpacing} from '../../../styles/spacings';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textContainer: {
    flex: 1,
    ...textContainerSpacing,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
};

export default styles;
