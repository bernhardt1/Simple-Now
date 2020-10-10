import {
  defaultHeader,
  standardImageButton,
} from '../../styles/standardComponents';

const styles = {
  container: {
    ...defaultHeader,
  },
  invisibleView: {
    backgroundColor: 'transparent',
    height: standardImageButton.height,
    width: standardImageButton.width,
  },
};

export default styles;
