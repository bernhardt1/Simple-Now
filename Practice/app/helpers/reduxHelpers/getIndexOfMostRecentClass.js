import createCourseObject from '../createCourseObject';
import getFirstExerciseWithReminderTime from './getFirstExerciseWithReminderTime';

const getIndexOfMostRecentClass = (reduxCourse) => {
  const now = new Date();
  const courseObject = createCourseObject(reduxCourse);

  const firstExerciseWithReminder = getFirstExerciseWithReminderTime(
    courseObject[0]?.exercises,
  );
  const firstReminderDate = new Date(firstExerciseWithReminder?.reminderTime);
  const timeSinceActivated = now - firstReminderDate;
  const daysSinceActivated = timeSinceActivated / 86400000;

  if (daysSinceActivated >= courseObject.length) {
    return courseObject.length - 1;
  } else if (daysSinceActivated < 0) {
    return 0;
  } else {
    return Math.floor(daysSinceActivated);
  }
};

export default getIndexOfMostRecentClass;
