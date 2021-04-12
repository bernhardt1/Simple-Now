import getCategoryContent from '../contentHelpers/getCategoryContent';
import getNextCategoryInPractice from '../contentHelpers/getNextCategoryInPractice';
import getNextNewExercise from '../contentHelpers/getNextNewExercise';
import getCategoryContentRedux from './getCategoryContentRedux';

const getTomorrowsPractice = (reduxPractice, reduxContent) => {
  const {
    activePrograms,
    generatePracticeIndex,
    numberDailyPracticeSessions,
  } = reduxPractice;
  let selectorIndex = generatePracticeIndex;
  const newDailyPracticeExercises = [];
  let exerciseCount = numberDailyPracticeSessions;
  while (exerciseCount > 0) {
    const nextCategoryInPractice = getNextCategoryInPractice(
      activePrograms,
      selectorIndex
    );

    const reduxCategoryContent = getCategoryContentRedux(
      nextCategoryInPractice,
      reduxContent
    );
    const categoryContent = getCategoryContent(nextCategoryInPractice)
      ?.exerciseData?.data;

    const exercise = getNextNewExercise(
      categoryContent,
      reduxCategoryContent,
      newDailyPracticeExercises,
      nextCategoryInPractice
    );

    if (exercise) newDailyPracticeExercises.push(exercise);
    exerciseCount--;
    selectorIndex = (selectorIndex + 1) % activePrograms.length;
  }

  return newDailyPracticeExercises;
};

export default getTomorrowsPractice;
