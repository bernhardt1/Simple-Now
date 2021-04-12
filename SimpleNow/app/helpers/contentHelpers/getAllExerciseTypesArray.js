import {
  BREATH_EXERCISE,
  HEAR_EXERCISE,
  QUESTION_EXERCISE,
  SEE_EXERCISE,
  SELF_AWARENESS_EXERCISE,
  SENSATION_EXERCISE,
  SENSE_EXERCISE,
  THOUGHT_EXERCISE,
} from '../../constants/constants';

// this function accepts a string and returns the local image with a matching name.
const getAllExerciseTypesArray = () => {
  return [
    BREATH_EXERCISE,
    SENSATION_EXERCISE,
    HEAR_EXERCISE,
    THOUGHT_EXERCISE,
    SEE_EXERCISE,
    SENSE_EXERCISE,
    SELF_AWARENESS_EXERCISE,
    QUESTION_EXERCISE,
  ];
};

export default getAllExerciseTypesArray;
