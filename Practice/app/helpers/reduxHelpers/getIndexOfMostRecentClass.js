import createCourseObject from './createCourseObject';
import getDaysPastSinceStartTimestamp from '../timeHelpers/getDaysPastSinceStartTimestamp';

const getIndexOfMostRecentClass = (reduxCourse) => {
  const courseObject = createCourseObject(reduxCourse);

  const daysPastSinceStartTimestamp = getDaysPastSinceStartTimestamp(
    reduxCourse?.startTimestamp,
  );

  return Math.min(daysPastSinceStartTimestamp, courseObject?.length);
};

export default getIndexOfMostRecentClass;
