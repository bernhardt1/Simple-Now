import getCategoryContentRedux from './getCategoryContentRedux';

const isExerciseComplete = (category, exerciseId, reduxContent) => {
  const reduxCategoryContent = getCategoryContentRedux(category, reduxContent);
  let result = false;

  for (const [key] of Object.entries(reduxCategoryContent)) {
    if (key.toLowerCase().includes(exerciseId.toLowerCase())) {
      result = true;
      return result;
    }
  }

  return result;
};

export default isExerciseComplete;
