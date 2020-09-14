import createCourseObject from './createCourseObject';

const isExerciseComplete = (exerciseIndex, classIndex, reduxCourse) => {
  const courseObject = createCourseObject(reduxCourse);

  const isComplete =
    courseObject[classIndex]?.exercises[exerciseIndex]?.exercise?.isComplete;

  return isComplete;
};

export default isExerciseComplete;
