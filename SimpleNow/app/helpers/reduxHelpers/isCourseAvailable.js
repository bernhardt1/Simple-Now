import getDaysPastSinceStartTimestamp from '../timeHelpers/getDaysPastSinceStartTimestamp';

const isCourseAvailable = (reduxCourses, courseId) => {
  if (courseId === 101) return true;

  if (courseId === 102) {
    if (!reduxCourses?.course101_startTimestamp) return false;

    const daysSinceIntroductionStarted = getDaysPastSinceStartTimestamp(
      reduxCourses?.course101_startTimestamp
    );

    if (
      daysSinceIntroductionStarted >=
      reduxCourses?.course101_classesCount - 1
    ) {
      return true;
    } else {
      return false;
    }
  }
};

export default isCourseAvailable;
