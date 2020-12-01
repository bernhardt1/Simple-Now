import getCategoryContent from '../contentHelpers/getCategoryContent';
import getNextCategoryInPractice from '../contentHelpers/getNextCategoryInPractice';
import getNextNewExercise from '../contentHelpers/getNextNewExercise';
import isNewDaySinceTimestamp from '../timeHelpers/isNewDaySinceTimestamp';
import getCategoryContentRedux from './getCategoryContentRedux';

const generatePractice = (
  reduxPractice,
  reduxContent,
  reduxUpdateCurrentPractice
) => {
  const {
    activePrograms,
    generatePracticeIndex,
    generatePracticeTimestamp,
    numberDailyPracticeSessions,
  } = reduxPractice;
  const isNewDay = isNewDaySinceTimestamp(generatePracticeTimestamp);
  if (!isNewDay) return;

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

  reduxUpdateCurrentPractice({
    currentPractice: newDailyPracticeExercises,
    generatePracticeIndex: selectorIndex,
    generatePracticeTimestamp: new Date(),
  });
};

export default generatePractice;
