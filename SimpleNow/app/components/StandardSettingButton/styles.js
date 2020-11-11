import { widthUnit } from '../../styles/constants';
import { footnoteFont } from '../../styles/fonts';

const styles = {
  textContainer: {
    flexDirection: 'row',
  },
  image: {
    height: footnoteFont.fontSize + 2,
    width: footnoteFont.fontSize + 2,
    marginLeft: widthUnit * 2,
  },
};

export default styles;
