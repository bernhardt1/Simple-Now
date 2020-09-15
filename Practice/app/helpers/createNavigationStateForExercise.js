import {awarenessBeginner} from '../assets/courses';
import {CLASS_SCREEN, EXERCISE_SCREEN} from '../constants/constants';

// this function accepts a string and returns the local image with a matching name.
function createNavigationStateForExercise(path) {
  const parts = path.split('/');
  let screen;
  let courseIndex;
  let classIndex;
  let exerciseIndex;

  if (parts.length < 4) {
    courseIndex = parts[0];
    classIndex = parts[1];
    exerciseIndex = parts[2];
  } else {
    screen = parts[0];
    courseIndex = parts[1];
    classIndex = parts[2];
    exerciseIndex = parts[3];
  }

  const course = awarenessBeginner;

  const linkingState = {
    index: 0,
    routes: [
      {
        name: 'Practice',
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
          exercise:
            awarenessBeginner?.classes[classIndex].exercises[exerciseIndex],
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
