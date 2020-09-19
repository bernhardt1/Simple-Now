import courseNotificationScheduler from '../courseNotificationScheduler';

const startCourse = (course, reduxCourse, reduxUpdateCourseTimestamp) => {
  // update redux with the courseStartTimestamp
  const now = new Date().toISOString();
  reduxUpdateCourseTimestamp(now);

  // run course scheduler
  courseNotificationScheduler(course, reduxCourse, now);
};
export default startCourse;
