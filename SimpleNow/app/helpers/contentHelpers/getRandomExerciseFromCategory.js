import getAllExerciseTypesArray from './getAllExerciseTypesArray';
import getCategoryContent from './getCategoryContent';

const getRandomExerciseFromCategory = (category) => {
  const exercises = getCategoryContent(category);

  const randomExercise =
    exercises[Math.floor(Math.random() * exercises.length)];
  return randomExercise;
};

export default getRandomExerciseFromCategory;
