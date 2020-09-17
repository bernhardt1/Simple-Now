import courseNotificationScheduler from '../courseNotificationScheduler';

const startCourse = (
  course,
  reduxCourse,
  reduxUpdateCourseTimestamp,
  reduxUpdateReminderTimes,
) => {
  // update redux with the courseStartTimestamp
  const now = new Date().toISOString();
  reduxUpdateCourseTimestamp(now);

  // run course scheduler
  courseNotificationScheduler(
    course,
    reduxCourse,
    reduxUpdateReminderTimes,
    now,
  );
};
export default startCourse;
