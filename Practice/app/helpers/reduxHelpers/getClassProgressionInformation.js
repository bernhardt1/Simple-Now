import createReduxCourseObject from './createReduxCourseObject';

const getClassProgressionInformation = (course, reduxCourse, classIndex) => {
  const courseObject = createReduxCourseObject(reduxCourse);
  const cla = courseObject[classIndex];
  const items = [];

  course?.classes[classIndex]?.exercises?.forEach((e, index) => {
    const item = {
      image: e?.image,
      reminderTime: e?.reminderTime,
      isComplete: cla?.exercises[index]?.exercise?.isComplete,
      key: `${classIndex}_${index}`,
    };

    items.push(item);
  });

  return items;
};

export default getClassProgressionInformation;
