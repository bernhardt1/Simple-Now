export const UPDATE_DEVICE_NOTIFICATIONS_ENABLED =
  'UPDATE_DEVICE_NOTIFICATIONS_ENABLED';
export const ADD_REMINDER = 'ADD_REMINDER';
export const DELETE_REMINDER = 'DELETE_REMINDER';
export const UPDATE_REMINDER_IS_ENABLED = 'UPDATE_REMINDER_IS_ENABLED';

export const updateDeviceNotificationsEnabled = (val) => ({
  type: UPDATE_DEVICE_NOTIFICATIONS_ENABLED,
  val,
});

export const addReminder = (obj) => ({
  type: ADD_REMINDER,
  obj,
});

export const deleteReminder = (val) => ({
  type: DELETE_REMINDER,
  val,
});

export const updateReminderIsEnabled = (obj) => ({
  type: UPDATE_REMINDER_IS_ENABLED,
  obj,
});
