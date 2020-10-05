import { MINDFULNESS_BEGINNER_COURSE } from '../assets/courses';
import {
  UPDATE_AWARENESS_BEGINNER_START_TIMESTAMP,
  UPDATE_AWARENESS_BEGINNER_CLASS_EXERCISE_ISCOMPLETE,
  RESET_AWARENESS_BEGINNER,
} from '../actions/awarenessBeginner';

// classes type - copies the structure of course objects
// [
//   {
//     exercises: [
//       {
//         isComplete: true,
//       },
//     ],
//   },
//   {
//     exercises: [
//       {
//         isComplete: false,
//       },
//     ],
//   },
// ];

// classes type - flattens the structure of course objects into shallow structures - this triggers the react lifecycle on all updates
// property name copies exact names from the course objects with _ to mimic nesting
//   {
//     classes0_exercises0_isComplete: true,
//     classes0_exercises1_isComplete: false,
//     classes0_exercisesCount: 3,
//     classesCount: 2,
//     startTimestamp: null
//   },

const generateInitialState = () => {
  const exercisesIsComplete = {};
  const exercisesCount = {};
  let classesCount = 0;
  const startTimestamp = null;

  MINDFULNESS_BEGINNER_COURSE?.classes?.forEach((c, cIndex) => {
    let nextExercisesCount = 0;

    c?.exercises?.forEach((e, eIndex) => {
      exercisesIsComplete[
        `classes${cIndex}_exercises${eIndex}_isComplete`
      ] = false;

      nextExercisesCount += 1;
    });
    classesCount += 1;

    exercisesCount[`classes${cIndex}_exercisesCount`] = nextExercisesCount;
  });

  return {
    ...exercisesIsComplete,
    ...exercisesCount,
    classesCount,
    startTimestamp,
  };
};

const initialState = generateInitialState();

const awarenessBeginnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_AWARENESS_BEGINNER: {
      return generateInitialState();
    }
    case UPDATE_AWARENESS_BEGINNER_CLASS_EXERCISE_ISCOMPLETE: {
      const newState = state;

      newState[
        `classes${action.obj.class}_exercises${action?.obj?.exercise}_isComplete`
      ] = action.obj.isComplete;

      return {
        ...newState,
      };
    }
    case UPDATE_AWARENESS_BEGINNER_START_TIMESTAMP: {
      return {
        ...state,
        startTimestamp: action?.startTimestamp,
      };
    }
    default: {
      return state;
    }
  }
};
// Exports
export default awarenessBeginnerReducer;
