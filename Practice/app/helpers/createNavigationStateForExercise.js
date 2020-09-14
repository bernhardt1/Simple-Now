import {awarenessBeginner} from '../assets/courses';
import {CLASS_SCREEN, EXERCISE_SCREEN} from '../constants/constants';

// this function accepts a string and returns the local image with a matching name.
function createNavigationStateForExercise(path) {
  const parts = path.split('/');
  const screen = parts[0];
  const courseIndex = parts[1];
  const classIndex = parts[2];
  const exerciseIndex = parts[3];

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
