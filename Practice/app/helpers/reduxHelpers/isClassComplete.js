import createReduxCourseObject from './createReduxCourseObject';

const isClassComplete = (reduxCourse, classIndex) => {
  console.log('reduxCourse', reduxCourse);
  console.log('classIndex', classIndex);
  const courseObject = createReduxCourseObject(reduxCourse);
  let isComplete = true;

  courseObject[classIndex]?.exercises.forEach((e) => {
    isComplete = e.exercise?.isComplete && isComplete;
  });

  return isComplete;
};

export default isClassComplete;
