import getCategoryContent from './getCategoryContent';

const getRandomExerciseFromCategory = (category) => {
  const exerciseData = getCategoryContent(category);
  const exercises = exerciseData?.exerciseData?.data;

  const randomExercise =
    exercises?.[Math.floor(Math.random() * exercises?.length)];
  return randomExercise;
};

export default getRandomExerciseFromCategory;
