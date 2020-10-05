import createCourseObject from './createCourseObject';
import getDaysPastSinceStartTimestamp from '../timeHelpers/getDaysPastSinceStartTimestamp';

const getIndexOfMostRecentClass = (reduxCourse) => {
  const courseObject = createCourseObject(reduxCourse);

  const daysPastSinceStartTimestamp = getDaysPastSinceStartTimestamp(
    reduxCourse?.startTimestamp,
  );

  const result = Math.min(daysPastSinceStartTimestamp, courseObject?.length);

  return result || 0;
};

export default getIndexOfMostRecentClass;
