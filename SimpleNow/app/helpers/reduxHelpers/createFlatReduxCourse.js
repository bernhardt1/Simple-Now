const createFlatReduxCourse = (reduxCourses, courseId) => {
  // grab the specified course from the redux data
  const flatReduxCourse = {};
  const keys = Object.entries(reduxCourses);
  for (const [key, val] of keys) {
    if (key.includes(courseId)) flatReduxCourse[key.substring(10)] = val;
  }

  return flatReduxCourse;
};

export default createFlatReduxCourse;
