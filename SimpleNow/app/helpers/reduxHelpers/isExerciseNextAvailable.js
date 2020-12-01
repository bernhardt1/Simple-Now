import isExerciseComplete from './isExerciseComplete';

const isExerciseNextAvailable = (category, exerciseId, reduxContent) => {
  const exerciseParts = exerciseId.split('-');
  const prevExerciseNumber = parseInt(exerciseParts[1], 10) - 1;
  const prevExerciseId = `${exerciseParts[0]}-${prevExerciseNumber}`;

  const isPrevExerciseComplete =
    isExerciseComplete(category, prevExerciseId, reduxContent) ||
    prevExerciseNumber < 0;
  const isCurrentExerciseComplete = isExerciseComplete(
    category,
    exerciseId,
    reduxContent
  );

  if (isPrevExerciseComplete && !isCurrentExerciseComplete) return true;
  return false;
};

export default isExerciseNextAvailable;
