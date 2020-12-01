import { UPDATE_CONTENT_COMPLETE, RESET_ALL_CONTENT } from '../actions/content';

import generateISODate from '../helpers/timeHelpers/generateISODate';

// content type - flattens the structure of all content into shallow structures - this triggers the react lifecycle on all updates
// property name copies exact names from the json objects with _ to mimic nesting
//   {
//     Breath-0_isCompleteTimestamp: null,
//   },

// initial state is empty because all exercises are incomplete
// BONUS: adding new exercises automatically considers them incomplete.
const initialState = {
  Breath_0_isCompleteTimestamp: new Date(),
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_ALL_CONTENT: {
      return {};
    }
    case UPDATE_CONTENT_COMPLETE: {
      return {
        ...state,
        [`${action.val}_isCompleteTimestamp`]: generateISODate(),
      };
    }
    default: {
      return state;
    }
  }
};

export default contentReducer;
