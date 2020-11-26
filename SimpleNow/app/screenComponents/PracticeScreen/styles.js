import { DARK_OVERLAY } from '../../styles/colors';
import { screenWidth, widthUnit } from '../../styles/constants';
import { buttonFromEdgeSpacing } from '../../styles/spacings';

const styles = {
  container: {
    flex: 1,
  },
  topSection: {
    flex: 1,
    ...buttonFromEdgeSpacing,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: widthUnit * 8,
  },
  centerSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerCircle: {
    backgroundColor: DARK_OVERLAY,
    height: widthUnit * 50,
    width: widthUnit * 50,
    borderRadius: (widthUnit * 50) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  flatlistContainer: {
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
