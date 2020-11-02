import {
  UPDATE_ACTIVE_COURSE_ID,
  UPDATE_COURSE_TIMESTAMP,
  UPDATE_COURSE_CLASS_EXERCISE_ISCOMPLETE,
  RESET_COURSE,
} from '../actions/courses';
import generateInitialState from '../helpers/reduxHelpers/generateInitialState';

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
//     course101_classes0_exercises0_isComplete: true,
//     course101_classes0_exercises1_isComplete: false,
//     course101_classes0_exercisesCount: 3,
//     course101_classesCount: 2,
//     course101_startTimestamp: null
//     course101_complete: false
//   },

const initialState = {
  activeCourseId: 101,
  ...generateInitialState(101),
  ...generateInitialState(102),
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_COURSE: {
      return {
        ...state,
        ...generateInitialState(action?.val),
      };
    }
    case UPDATE_ACTIVE_COURSE_ID: {
      return {
        ...state,
        activeCourseId: action.val,
      };
    }
    case UPDATE_COURSE_CLASS_EXERCISE_ISCOMPLETE: {
      const newState = state;

      newState[
        `course${action?.obj?.courseId}_classes${action?.obj?.class}_exercises${action?.obj?.exercise}_isComplete`
      ] = action?.obj?.isComplete;

      return {
        ...newState,
      };
    }
    case UPDATE_COURSE_TIMESTAMP: {
      return {
        ...state,
        [`course${action?.obj?.courseId}_startTimestamp`]: action?.obj
          ?.startTimestamp,
      };
    }
    default: {
      return state;
    }
  }
};

export default coursesReducer;
