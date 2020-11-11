import { standardImageButton } from '../../styles/standardComponents';

const styles = {
  container: {
    ...standardImageButton,
  },
  button: {
    ...standardImageButton,
  },
  image: {
    height: Math.max(
      standardImageButton.height * 0.55,
      standardImageButton.minHeight * 0.55
    ),
    width: Math.max(
      standardImageButton.width * 0.55,
      standardImageButton.minWidth * 0.55
    ),
  },
};

export default styles;
