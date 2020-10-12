import createReduxCourseObject from './createReduxCourseObject';

const isClassComplete = (reduxCourse, classIndex) => {
  const courseObject = createReduxCourseObject(reduxCourse);
  let isComplete = true;

  courseObject[classIndex]?.exercises.forEach((e) => {
    isComplete = e.exercise?.isComplete && isComplete;
  });

  return isComplete;
};

export default isClassComplete;
