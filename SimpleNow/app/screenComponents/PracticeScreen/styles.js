import { DARK_OVERLAY } from '../../styles/colors';
import { widthUnit } from '../../styles/constants';
import { buttonFromEdgeSpacing } from '../../styles/spacings';

const styles = {
  container: {
    flex: 1,
  },
  headerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerSection: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerCircle: {
    backgroundColor: DARK_OVERLAY,
    height: widthUnit * 60,
    width: widthUnit * 60,
    borderRadius: (widthUnit * 60) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperBottomSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerBottomSection: {
    flex: 1,
    ...buttonFromEdgeSpacing,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  infoButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // other
  textSpacing: {
    marginBottom: widthUnit * 2,
  },
};

export default styles;
