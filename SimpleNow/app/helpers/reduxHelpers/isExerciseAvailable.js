import convertReminderTimeToISODate from '../timeHelpers/convertReminderTimeToISODate';
import getDaysPastSinceStartTimestamp from '../timeHelpers/getDaysPastSinceStartTimestamp';

const isExerciseAvailable = (
  reduxCourse,
  course,
  classIndex,
  exerciseIndex
) => {
  const now = new Date().toISOString();
  const daysPastSinceStartTimestamp = getDaysPastSinceStartTimestamp(
    reduxCourse?.startTimestamp
  );
  const exerciseReminderTime =
    course?.classes[classIndex]?.exercises[exerciseIndex]?.reminderTime;

  if (!exerciseReminderTime || typeof exerciseReminderTime === 'undefined') {
    return true;
  }

  const reminderDate = convertReminderTimeToISODate(
    exerciseReminderTime,
    daysPastSinceStartTimestamp,
    classIndex
  );

  if (reminderDate && reminderDate <= now) {
    return true;
  }
  return false;
};

export default isExerciseAvailable;
