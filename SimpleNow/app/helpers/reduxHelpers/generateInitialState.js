import getCourseFromId from '../courseHelpers/getCourseFromId';

const generateInitialState = (courseId) => {
  const course = getCourseFromId(courseId);

  const exercisesIsComplete = {};
  const exercisesCount = {};
  let classesCount = 0;
  const startTimestamp = null;

  course?.classes?.forEach((c, cIndex) => {
    let nextExercisesCount = 0;

    c?.exercises?.forEach((e, eIndex) => {
      exercisesIsComplete[
        `course${courseId}_classes${cIndex}_exercises${eIndex}_isComplete`
      ] = false;

      nextExercisesCount += 1;
    });
    classesCount += 1;

    exercisesCount[
      `course${courseId}_classes${cIndex}_exercisesCount`
    ] = nextExercisesCount;
  });

  return {
    ...exercisesIsComplete,
    ...exercisesCount,
    [`course${courseId}_classesCount`]: classesCount,
    [`course${courseId}_startTimestamp`]: startTimestamp,
  };
};

export default generateInitialState;
