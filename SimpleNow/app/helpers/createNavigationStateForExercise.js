import { CLASS_SCREEN, EXERCISE_SCREEN } from '../constants/constants';
import getCourseFromId from './courseHelpers/getCourseFromId';
import sentryCaptureMessage from './errorHelpers/sentryCaptureMessage';

// this function accepts a string and returns the local image with a matching name.
function createNavigationStateForExercise(path) {
  let parts;

  try {
    parts = path.split('/');
  } catch (error) {
    sentryCaptureMessage(
      'caught createNavigationStateForExercise path split error',
      path
    );
  }

  let screen;
  let courseId;
  let classIndex;
  let exerciseIndex;

  if (parts?.length < 3) {
  } else if (parts.length < 4) {
    courseId = parts[0];
    classIndex = parts[1];
    exerciseIndex = parts[2];
  } else {
    screen = parts[0];
    courseId = parts[1];
    classIndex = parts[2];
    exerciseIndex = parts[3];
  }

  const course = getCourseFromId(courseId);

  const linkingState = {
    index: 0,
    routes: [
      {
        name: 'Home',
      },
      {
        name: 'Class',
        params: {
          courseInfo: {
            courseTitle: course?.title,
            courseLength: course?.classes?.length,
            courseInformation: course?.information,
          },
          classInfo: {
            ...course?.classes[classIndex],
            classIndex: classIndex,
          },
          screenType: CLASS_SCREEN,
          isCourseActivated: true,
        },
      },
      {
        name: 'Exercise',
        params: {
          exercise: course?.classes[classIndex].exercises[exerciseIndex],
          classIndex,
          exerciseIndex,
          screenType: EXERCISE_SCREEN,
        },
      },
    ],
  };

  return linkingState;
}

export default createNavigationStateForExercise;