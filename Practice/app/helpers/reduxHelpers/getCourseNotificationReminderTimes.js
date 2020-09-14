import createCourseObject from '../createCourseObject';

const getCourseNotificationReminderTimes = (reduxAwarenessBeginner) => {
  const courseObject = createCourseObject(reduxAwarenessBeginner);
  const notificationDates = [];

  courseObject.forEach((c) => {
    c?.exercises?.forEach((exercise) => {
      if (exercise?.exercise?.reminderTime) {
        notificationDates.push(JSON.stringify(exercise.exercise.reminderTime));
      }
    });
  });

  return notificationDates;
};

export default getCourseNotificationReminderTimes;
