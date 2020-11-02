import {UPDATE_NAVIGATION_DEEP_LINK} from '../actions/navigation';

const initialState = {
  deepLinkState: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAVIGATION_DEEP_LINK:
      return {
        ...state,
        deepLinkState: action.result,
      };
    default:
      return state;
  }
};

export default reducer;
