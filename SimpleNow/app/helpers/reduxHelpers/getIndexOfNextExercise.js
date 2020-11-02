import createReduxCourseObject from './createReduxCourseObject';

const getIndexOfNextExercise = (course, reduxCourse, classIndex) => {
  const courseObject = createReduxCourseObject(reduxCourse);
  const cla = courseObject[classIndex];
  let result = 0;

  course?.classes[classIndex]?.exercises?.forEach((e, index) => {
    if (cla?.exercises[index]?.exercise?.isComplete) result = index + 1;
  });

  if (result >= course?.classes[classIndex]?.exercises?.length) return null;

  return result;
};

export default getIndexOfNextExercise;
