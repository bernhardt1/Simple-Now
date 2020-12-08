import { DARK_OVERLAY } from '../../styles/colors';
import { BORDER_RADIUS, widthUnit } from '../../styles/constants';
import {
  buttonFromEdgeSpacing,
  islandSpacing,
  verticalButtonsMargin,
} from '../../styles/spacings';
import { informationalImage } from '../../styles/standardComponents';

const styles = {
  container: {
    flex: 1,
  },
  timePickerContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerSection: {
    ...islandSpacing,
    paddingBottom: widthUnit * 16,
    justifyContent: 'space-between',
  },
  dayButton: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: DARK_OVERLAY,
    height: widthUnit * 10,
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
