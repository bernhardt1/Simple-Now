import {
  defaultHeader,
  standardImageButton,
} from '../../styles/standardComponents';

const styles = {
  container: {
    ...defaultHeader,
  },
  centerTextContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    left: defaultHeader.paddingHorizontal,
  },
  invisibleView: {
    backgroundColor: 'transparent',
    height: standardImageButton.height,
    width: standardImageButton.width,
  },
};

export default styles;
