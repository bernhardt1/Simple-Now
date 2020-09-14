import createCourseObject from './createCourseObject';

const isClassComplete = (reduxCourse, classIndex) => {
  const courseObject = createCourseObject(reduxCourse);
  let isComplete = true;

  courseObject[classIndex]?.exercises.forEach((e) => {
    isComplete = e.exercise?.isComplete && isComplete;
  });

  return isComplete;
};

export default isClassComplete;
