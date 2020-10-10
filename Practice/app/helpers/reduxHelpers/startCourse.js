import courseNotificationScheduler from '../courseNotificationScheduler';

const startCourse = (course, reduxCourse, reduxUpdateCourseTimestamp) => {
  // update redux with the courseStartTimestamp
  const now = new Date().toISOString();
  reduxUpdateCourseTimestamp({
    startTimestamp: now,
    courseId: course.id,
  });

  // run course scheduler
  courseNotificationScheduler(course, reduxCourse, now);
};
export default startCourse;
