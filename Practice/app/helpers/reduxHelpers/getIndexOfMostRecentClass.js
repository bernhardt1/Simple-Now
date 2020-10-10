import createReduxCourseObject from './createReduxCourseObject';
import getDaysPastSinceStartTimestamp from '../timeHelpers/getDaysPastSinceStartTimestamp';

const getIndexOfMostRecentClass = (reduxCourse) => {
  const courseObject = createReduxCourseObject(reduxCourse);

  const daysPastSinceStartTimestamp = getDaysPastSinceStartTimestamp(
    reduxCourse?.startTimestamp
  );

  const result = Math.min(daysPastSinceStartTimestamp, courseObject?.length);

  return result || 0;
};

export default getIndexOfMostRecentClass;
