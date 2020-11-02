const isCourseActive = (reduxCourse) => {
  if (reduxCourse?.startTimestamp) return true;

  return false;
};

export default isCourseActive;
