import getDaysPastSinceStartTimestamp from '../timeHelpers/getDaysPastSinceStartTimestamp';

const getNumberOfExercisesCompletedSinceXDaysAgo = (
  reduxContent,
  numberOfDays
) => {
  let numberOfExercisesCompleted = 0;

  for (const [key, val] of Object.entries(reduxContent)) {
    if (key.toLowerCase().includes('iscompletetimestamp')) {
      const daysSinceTimestamp = getDaysPastSinceStartTimestamp(val);
      if (daysSinceTimestamp < numberOfDays) {
        numberOfExercisesCompleted++;
      }
    }
  }

  return numberOfExercisesCompleted;
};

export default getNumberOfExercisesCompletedSinceXDaysAgo;
