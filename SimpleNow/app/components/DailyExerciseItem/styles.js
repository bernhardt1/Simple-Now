import { heightUnit, widthUnit } from '../../styles/constants';
import { VERY_DARK_OVERLAY } from '../../styles/colors';
import { dailyExerciseItem } from '../../styles/standardComponents';

const styles = {
  container: {
    ...dailyExerciseItem,
  },
  image: {
    height: dailyExerciseItem.height,
    width: dailyExerciseItem.width,
    borderRadius: dailyExerciseItem.borderRadius,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: heightUnit * 10,
    width: dailyExerciseItem.width,
    borderRadius: dailyExerciseItem.borderRadius,
    backgroundColor: VERY_DARK_OVERLAY,
  },
  remindMeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: dailyExerciseItem.width,
    marginLeft: dailyExerciseItem.marginLeft,
    marginTop: widthUnit,
    paddingHorizontal: widthUnit * 2,
  },
};

export default styles;
