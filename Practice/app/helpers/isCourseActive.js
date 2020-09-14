import createCourseObject from './createCourseObject';

const isCourseActive = (reduxCourse) => {
  const courseObject = createCourseObject(reduxCourse);
  let isActive = false;

  courseObject?.forEach((c) => {
    c?.exercises?.forEach((e) => {
      if (e?.exercise?.isComplete) {
        isActive = true;
      }

      return;
    });
  });

  return isActive;
};

export default isCourseActive;
