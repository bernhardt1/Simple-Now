import { DARK_OVERLAY } from '../../styles/colors';
import { screenWidth, widthUnit } from '../../styles/constants';
import {
  buttonFromEdgeSpacing,
  standardSettingButtonSpacing,
} from '../../styles/spacings';

const styles = {
  container: {
    flex: 1,
  },
  topSection: {
    ...buttonFromEdgeSpacing,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: widthUnit * 6,
  },
  centerSection: {
    paddingVertical: widthUnit * 6,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    // backgroundColor: DARK_OVERLAY,
  },
  dailyPracticeTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    ...standardSettingButtonSpacing,
    marginVertical: widthUnit * 2,
  },
  flatlistContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  infoButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // RenderDailyExerciseItems
  exerciseItemsTopRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  exerciseItemsBottomRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  // other
  textSpacing: {
    marginBottom: widthUnit * 1,
  },
};

export default styles;
