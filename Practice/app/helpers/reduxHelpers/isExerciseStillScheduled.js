import createCourseObject from '../createCourseObject';

const isExerciseStillScheduled = (reduxCourse, classIndex, exerciseIndex) => {
  const now = new Date().toISOString();
  const courseObject = createCourseObject(reduxCourse);
  const reminderTime =
    courseObject[classIndex]?.exercises[exerciseIndex]?.exercise?.reminderTime;

  if (reminderTime && reminderTime >= now) {
    return true;
  }
  return false;
};

export default isExerciseStillScheduled;
