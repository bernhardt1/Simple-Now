import {
  BREATH_EXERCISE,
  THOUGHT_EXERCISE,
  SENSATION_EXERCISE,
  HEAR_EXERCISE,
} from '../constants/constants';
import {
  HOW_TO_BREATH,
  HOW_TO_SENSATION,
  HOW_TO_THOUGHT,
  HOW_TO_HEAR,
} from '../constants/dict';

const getAboutExerciseCopy = (exercise) => {
  switch (exercise?.exerciseType) {
    case BREATH_EXERCISE:
      return HOW_TO_BREATH;
    case SENSATION_EXERCISE:
      return HOW_TO_SENSATION;
    case THOUGHT_EXERCISE:
      return HOW_TO_THOUGHT;
    case HEAR_EXERCISE:
      return HOW_TO_HEAR;
    default:
      return 'You got this.';
  }
};

export default getAboutExerciseCopy;
