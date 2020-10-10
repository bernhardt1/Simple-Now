import { UPDATE_BACKGROUND } from '../actions/settings';

const initialState = {
  background: 'background1',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BACKGROUND:
      return {
        ...state,
        background: action.val,
      };
    default:
      return state;
  }
};

export default reducer;
