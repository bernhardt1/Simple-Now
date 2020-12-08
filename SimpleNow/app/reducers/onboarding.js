import { UPDATE_ONBOARDING_COMPLETE } from '../actions/onboarding';

const initialState = {
  onboardingComplete: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ONBOARDING_COMPLETE:
      return {
        ...state,
        onboardingComplete: action.val,
      };
    default:
      return state;
  }
};

export default reducer;
