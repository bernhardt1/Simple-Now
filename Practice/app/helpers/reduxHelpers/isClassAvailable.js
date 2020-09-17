import getDaysPastSinceStartTimestamp from '../timeHelpers/getDaysPastSinceStartTimestamp';

const isClassAvailable = (reduxCourse, classIndex) => {
  const daysPastSinceStartTimestamp = getDaysPastSinceStartTimestamp(
    reduxCourse?.startTimestamp,
  );

  if (classIndex <= daysPastSinceStartTimestamp) return true;

  return false;
};

export default isClassAvailable;
