export const RESET_AWARENESS_BEGINNER = 'RESET_AWARENESS_BEGINNER';
export const UPDATE_AWARENESS_BEGINNER_START_TIMESTAMP =
  'UPDATE_AWARENESS_BEGINNER_START_TIMESTAMP';
export const UPDATE_AWARENESS_BEGINNER_CLASS_EXERCISE_ISCOMPLETE =
  'UPDATE_AWARENESS_BEGINNER_CLASS_EXERCISE_ISCOMPLETE';

export const resetAwarenessBeginner = () => ({
  type: RESET_AWARENESS_BEGINNER,
});

export const updateAwarenessBeginnerStartTimestamp = (startTimestamp) => ({
  type: UPDATE_AWARENESS_BEGINNER_START_TIMESTAMP,
  startTimestamp,
});

export const updateAwarenessBeginnerClassExerciseIsComplete = (obj) => ({
  type: UPDATE_AWARENESS_BEGINNER_CLASS_EXERCISE_ISCOMPLETE,
  obj,
});
