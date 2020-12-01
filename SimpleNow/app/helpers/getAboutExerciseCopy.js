import {
  BREATH_EXERCISE,
  THOUGHT_EXERCISE,
  SENSATION_EXERCISE,
  HEAR_EXERCISE,
  SEE_EXERCISE,
  SENSE_EXERCISE,
  SELF_AWARENESS_EXERCISE,
  QUESTION_EXERCISE,
  QUOTE_EXERCISE,
  INTERACTIVE_EXERCISE,
} from '../constants/constants';
import {
  HOW_TO_BREATH,
  HOW_TO_SENSATION,
  HOW_TO_THOUGHT,
  HOW_TO_HEAR,
  HOW_TO_SEE,
  HOW_TO_SENSE,
  HOW_TO_SELF_AWARENESS,
  HOW_TO_QUESTION,
  HOW_TO_QUOTE,
  HOW_TO_INTERACTIVE,
} from '../constants/dict';

const getAboutExerciseCopy = (exercise) => {
  const switchVal = `${exercise?.exerciseType}`;
  const val = switchVal.toLowerCase();

  switch (val) {
    case BREATH_EXERCISE:
      return HOW_TO_BREATH;
    case SENSATION_EXERCISE:
      return HOW_TO_SENSATION;
    case THOUGHT_EXERCISE:
      return HOW_TO_THOUGHT;
    case HEAR_EXERCISE:
      return HOW_TO_HEAR;
    case SEE_EXERCISE:
      return HOW_TO_SEE;
    case SENSE_EXERCISE:
      return HOW_TO_SENSE;
    case SELF_AWARENESS_EXERCISE:
      return HOW_TO_SELF_AWARENESS;
    case QUESTION_EXERCISE:
      return HOW_TO_QUESTION;
    case QUOTE_EXERCISE:
      return HOW_TO_QUOTE;
    case INTERACTIVE_EXERCISE:
      return HOW_TO_INTERACTIVE;
    default:
      return 'You got this.';
  }
};

export default getAboutExerciseCopy;
