import sentryCaptureMessage from '../errorHelpers/sentryCaptureMessage';

const getClassIndex = (key) => {
  const classesX = key?.split('_')[0];

  const value = classesX?.split('classes')[1];

  const index = parseInt(value, 10);

  return index || 0;
};

const getExercisesIndex = (key) => {
  const exercisesX = key?.split('_')[1];

  const value = exercisesX?.split('exercises')[1];

  const index = parseInt(value, 10);

  return index || 0;
};

const createReduxCourseObject = (reduxCourses, courseId) => {
  // grab the specified course from the redux data
  const flatCourseData = {};
  const keys = Object.entries(reduxCourses);
  for (const [key, val] of keys) {
    if (key.includes(courseId)) flatCourseData[key.substring(10)] = val;
  }

  const classes = []; // an array of exercises

  try {
    // fill the array with an object for each class
    let classCount = flatCourseData?.classesCount;
    while (classCount > 0) {
      classes.push({
        exercises: [],
      });
      classCount -= 1;
    }

    // fill each class with the appropriate number of exercises
    for (const [key, value] of Object.entries(flatCourseData)) {
      if (key.includes('exercisesCount')) {
        let exercisesCount = value;
        const classIndex = getClassIndex(key);

        while (exercisesCount > 0) {
          classes[classIndex]?.exercises?.push({
            exercise: {},
          });
          exercisesCount -= 1;
        }
      }
    }

    for (const [key, value] of Object.entries(flatCourseData)) {
      const classIndex = getClassIndex(key);
      const exercisesIndex = getExercisesIndex(key);

      // set isComplete for each exercise
      if (
        key?.includes('isComplete') &&
        classes[classIndex]?.exercises[exercisesIndex]?.exercise
      ) {
        classes[classIndex].exercises[
          exercisesIndex
        ].exercise.isComplete = value;
      }

      // set reminderTime for each exercise
      if (
        key?.includes('reminderTime') &&
        classes[classIndex]?.exercises[exercisesIndex]?.exercise
      ) {
        classes[classIndex].exercises[
          exercisesIndex
        ].exercise.reminderTime = value;
      }
    }
  } catch (error) {
    sentryCaptureMessage('caught createReduxCourseObject error', error);
  }

  return classes;
};

export default createReduxCourseObject;
