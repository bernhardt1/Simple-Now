import { BORDER_RADIUS, heightUnit, widthUnit } from '../../styles/constants';
import { VERY_DARK_OVERLAY } from '../../styles/colors';

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: heightUnit * 35,
    width: widthUnit * 54,
    borderRadius: BORDER_RADIUS,
    backgroundColor: 'white',
    marginLeft: widthUnit * 4,
  },
  image: {
    height: heightUnit * 35,
    width: widthUnit * 54,
    borderRadius: BORDER_RADIUS,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: heightUnit * 10,
    width: widthUnit * 54,
    borderRadius: BORDER_RADIUS,
    backgroundColor: VERY_DARK_OVERLAY,
  },
};

export default styles;
