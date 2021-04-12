import {
  UPDATE_BACKGROUND,
  UPDATE_IS_SOUND_ON,
  UPDATE_PLAN_ID,
} from '../actions/settings';

const initialState = {
  planId: null,
  background: 'background1',
  isSoundOn: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PLAN_ID:
      return {
        ...state,
        planId: action.val,
      };
    case UPDATE_BACKGROUND:
      return {
        ...state,
        background: action.val,
      };
    case UPDATE_IS_SOUND_ON:
      return {
        ...state,
        isSoundOn: action.val,
      };
    default:
      return state;
  }
};

export default reducer;
