export const RESET_COURSE = 'RESET_COURSE';
export const UPDATE_ACTIVE_COURSE_ID = 'UPDATE_ACTIVE_COURSE_ID';
export const UPDATE_COURSE_TIMESTAMP = 'UPDATE_COURSE_TIMESTAMP';
export const UPDATE_COURSE_CLASS_EXERCISE_ISCOMPLETE =
  'UPDATE_COURSE_CLASS_EXERCISE_ISCOMPLETE';

export const resetCourse = (val) => ({
  type: RESET_COURSE,
  val,
});

export const updateActiveCourseId = (val) => ({
  type: UPDATE_ACTIVE_COURSE_ID,
  val,
});

export const updateCourseStartTimestamp = (obj) => ({
  type: UPDATE_COURSE_TIMESTAMP,
  obj,
});

export const updateCourseClassExerciseIsComplete = (obj) => ({
  type: UPDATE_COURSE_CLASS_EXERCISE_ISCOMPLETE,
  obj,
});
