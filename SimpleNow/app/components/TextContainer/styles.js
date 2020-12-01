import { DARK_OVERLAY } from '../../styles/colors';
import { BORDER_RADIUS, widthUnit } from '../../styles/constants';

const styles = {
  container: {
    paddingHorizontal: widthUnit * 2,
    paddingVertical: widthUnit / 2,
    backgroundColor: DARK_OVERLAY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDER_RADIUS,
  },
};

export default styles;
