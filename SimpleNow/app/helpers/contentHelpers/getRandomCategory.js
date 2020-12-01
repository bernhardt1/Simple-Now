import getAllExerciseTypesArray from './getAllExerciseTypesArray';

const getRandomCategory = (activePrograms, generatePracticeIndex) => {
  const allExerciseTypes = getAllExerciseTypesArray();
  const randomCategory =
    allExerciseTypes[Math.floor(Math.random() * allExerciseTypes.length)];
  return randomCategory;
};

export default getRandomCategory;
