import { ADD_PROGRAM, REMOVE_PROGRAM } from '../actions/practice';

const initialState = {
  activePrograms: [],
};

const practiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROGRAM: {
      console.log('state', state);

      const newActivePrograms = [
        ...new Set([...state?.activePrograms, action?.val]),
      ];
      console.log('newActivePrograms', newActivePrograms);
      return {
        ...state,
        activePrograms: newActivePrograms,
      };
    }
    case REMOVE_PROGRAM: {
      const newActivePrograms = state?.activePrograms?.filter(
        (p) => p !== action.val
      );
      console.log('newActivePrograms', newActivePrograms);

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
