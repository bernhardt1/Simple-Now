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
      standardImageButton.height * 0.75,
      standardImageButton.minHeight * 0.75
    ),
    width: Math.max(
      standardImageButton.width * 0.75,
      standardImageButton.minWidth * 0.75
    ),
  },
};

export default styles;
