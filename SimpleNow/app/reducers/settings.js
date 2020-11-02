import { UPDATE_BACKGROUND, UPDATE_IS_SOUND_ON } from '../actions/settings';

const initialState = {
  background: 'background1',
  isSoundOn: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
