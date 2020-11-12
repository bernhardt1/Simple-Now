import { DARK_OVERLAY } from '../../styles/colors';
import { BORDER_RADIUS, widthUnit } from '../../styles/constants';
import {
  buttonFromEdgeSpacing,
  bigIslandSpacing,
  verticalButtonsMargin,
} from '../../styles/spacings';

const styles = {
  container: {
    flex: 1,
  },
  buttonsSection: {
    flex: 1,
    ...bigIslandSpacing,

    justifyContent: 'space-between',
  },
  timeButton: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: DARK_OVERLAY,
    height: widthUnit * 14,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: BORDER_RADIUS,
    ...buttonFromEdgeSpacing,
    ...verticalButtonsMargin,
  },
  checkImage: {
    height: widthUnit * 6,
    width: widthUnit * 6,
  },
};

export default styles;
