import { Platform } from 'react-native';
import {
  ADD_REMINDER,
  DELETE_REMINDER,
  UPDATE_REMINDER_IS_ENABLED,
  UPDATE_DEVICE_NOTIFICATIONS_ENABLED,
} from '../actions/notifications';

const initialState = {
  isDeviceNotificationsEnabled: Platform.OS !== 'ios',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DEVICE_NOTIFICATIONS_ENABLED:
      return {
        ...state,
        isDeviceNotificationsEnabled: action.val,
      };
    case ADD_REMINDER:
      return {
        ...state,
        [action?.obj
          ?.id]: `${action?.obj?.time}-${action?.obj?.isMo}-${action?.obj?.isTu}-${action?.obj?.isWe}-${action?.obj?.isTh}-${action?.obj?.isFr}-${action?.obj?.isSa}-${action?.obj?.isSu}`,
        [`${action?.obj?.id}_isEnabled`]: true,
      };
    case DELETE_REMINDER:
      const updatedState = state;
      delete updatedState[action?.val];
      delete updatedState[`${action?.val}_isEnabled`];

      return {
        ...updatedState,
      };
    case UPDATE_REMINDER_IS_ENABLED:
      return {
        ...state,
        [`${action?.obj?.key}_isEnabled`]: action?.obj?.val,
      };
    default:
      return state;
  }
};

export default reducer;
