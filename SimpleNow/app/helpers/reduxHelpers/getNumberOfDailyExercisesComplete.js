const getNumberOfDailyExercisesComplete = (currentPracticeProgress) => {
  const progressCount =
    currentPracticeProgress?.length > 0
      ? currentPracticeProgress.split(':')
      : [];

  const result = Math.max(progressCount?.length - 1, 0);
  return result;
};

export default getNumberOfDailyExercisesComplete;
