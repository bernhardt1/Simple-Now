import createCourseObject from './createCourseObject';

const getClassesCompleteCount = (reduxAwarenessBeginner) => {
  const courseObject = createCourseObject(reduxAwarenessBeginner);
  let classesCompletedCount = 0;

  courseObject.forEach((c) => {
    let classComplete = true;
    c?.exercises?.forEach((exercise) => {
      classComplete = classComplete && exercise?.exercise?.isComplete;
    });

    if (classComplete) classesCompletedCount += 1;
  });

  return classesCompletedCount;
};

export default getClassesCompleteCount;
