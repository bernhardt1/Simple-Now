import {
  ADD_PROGRAM,
  REMOVE_PROGRAM,
  UPDATE_CURRENT_PRACTICE,
  UPDATE_PRACTICE_DURATION,
  UPDATE_NUMBER_DAILY_PRACTICE_SESSIONS,
} from '../actions/practice';

const initialState = {
  activePrograms: [],
  currentPractice: [],
  generatePracticeIndex: 0,
  generatePracticeTimestamp: null,
  practiceDuration: '30s',
  numberDailyPracticeSessions: 3,
};

const practiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRACTICE_DURATION: {
      return {
        ...state,
        practiceDuration: action.val,
      };
    }
    case UPDATE_NUMBER_DAILY_PRACTICE_SESSIONS: {
      return {
        ...state,
        numberDailyPracticeSessions: action.val,
      };
    }
    case UPDATE_CURRENT_PRACTICE: {
      return {
        ...state,
        currentPractice: action?.obj?.currentPractice,
        generatePracticeIndex: action?.obj?.generatePracticeIndex,
        generatePracticeTimestamp: action?.obj?.generatePracticeTimestamp,
      };
    }
    case ADD_PROGRAM: {
      const newActivePrograms = [
        ...new Set([...state?.activePrograms, action?.val]),
      ];
      return {
        ...state,
        activePrograms: newActivePrograms,
      };
    }
    case REMOVE_PROGRAM: {
      const newActivePrograms = state?.activePrograms?.filter(
        (p) => p !== action.val
      );

      return {
        ...state,
        activePrograms: newActivePrograms,
      };
    }
    default: {
      return state;
    }
  }
};

export default practiceReducer;
