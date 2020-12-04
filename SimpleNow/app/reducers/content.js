import { UPDATE_CONTENT_COMPLETE, RESET_ALL_CONTENT } from '../actions/content';

import generateISODate from '../helpers/timeHelpers/generateISODate';

// content type - flattens the structure of all content into shallow structures - this triggers the react lifecycle on all updates
// property name copies exact names from the json objects with _ to mimic nesting
//   {
//     Breath-0_isCompleteTimestamp: null,
//   },

// initial state is empty because all exercises are incomplete
// BONUS: adding new exercises automatically considers them incomplete.
const initialState = {};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_ALL_CONTENT: {
      return {};
    }
    case UPDATE_CONTENT_COMPLETE: {
      if (state[`${action.val}_isCompleteTimestamp`]) {
        let count = 1;

        while (state[`${action.val}_isCompleteTimestamp_${count}`]) {
          count++;
        }

        return {
          ...state,
          [`${action.val}_isCompleteTimestamp_${count}`]: generateISODate(),
        };
      } else {
        return {
          ...state,
          [`${action.val}_isCompleteTimestamp`]: generateISODate(),
        };
      }
    }
    default: {
      return state;
    }
  }
};

export default contentReducer;
