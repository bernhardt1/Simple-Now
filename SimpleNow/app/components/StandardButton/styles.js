import { widthUnit } from '../../styles/constants';
import { standardButton } from '../../styles/standardComponents';

const styles = {
  buttonRow: {
    flexDirection: 'row',
  },
  image: {
    height: standardButton.height * 0.5,
    width: standardButton.height * 0.5,
    marginLeft: widthUnit * 2,
  },
};

export default styles;
