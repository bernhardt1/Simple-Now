import createReduxCourseObject from './createReduxCourseObject';

const isExerciseComplete = (exerciseIndex, classIndex, reduxCourse) => {
  const courseObject = createReduxCourseObject(reduxCourse);

  const isComplete =
    courseObject[classIndex]?.exercises[exerciseIndex]?.exercise?.isComplete;

  return isComplete;
};

export default isExerciseComplete;
