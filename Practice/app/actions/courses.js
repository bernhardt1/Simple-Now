export const RESET_COURSE = 'RESET_COURSE';
export const UPDATE_COURSE_TIMESTAMP = 'UPDATE_COURSE_TIMESTAMP';
export const UPDATE_COURSE_CLASS_EXERCISE_ISCOMPLETE =
  'UPDATE_COURSE_CLASS_EXERCISE_ISCOMPLETE';

export const resetCourse = (courseId) => ({
  type: RESET_COURSE,
  courseId,
});

export const updateCourseStartTimestamp = (obj) => ({
  type: UPDATE_COURSE_TIMESTAMP,
  obj,
});

export const updateCourseClassExerciseIsComplete = (obj) => ({
  type: UPDATE_COURSE_CLASS_EXERCISE_ISCOMPLETE,
  obj,
});
