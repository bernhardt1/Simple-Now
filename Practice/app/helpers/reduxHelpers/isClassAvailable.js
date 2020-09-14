import createCourseObject from '../createCourseObject';
import getFirstExerciseWithReminderTime from './getFirstExerciseWithReminderTime';

const isClassAvailable = (reduxCourse, classIndex) => {
  if (classIndex === 0) return true;

  const now = new Date().toISOString();
  const courseObject = createCourseObject(reduxCourse);
  const exerciseWithReminderTime = getFirstExerciseWithReminderTime(
    courseObject[classIndex]?.exercises,
  );

  if (
    !exerciseWithReminderTime?.reminderTime ||
    exerciseWithReminderTime.reminderTime <= now
  ) {
    return true;
  }
  return false;
};

export default isClassAvailable;
