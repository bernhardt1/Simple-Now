export const ADD_PROGRAM = 'ADD_PROGRAM';
export const REMOVE_PROGRAM = 'REMOVE_PROGRAM';
export const UPDATE_CURRENT_PRACTICE = 'UPDATE_CURRENT_PRACTICE';
export const UPDATE_PRACTICE_DURATION = 'UPDATE_PRACTICE_DURATION';
export const UPDATE_NUMBER_DAILY_PRACTICE_SESSIONS =
  'UPDATE_NUMBER_DAILY_PRACTICE_SESSIONS';

export const updateCurrentPractice = (obj) => ({
  type: UPDATE_CURRENT_PRACTICE,
  obj,
});
export const updatePracticeDuration = (val) => ({
  type: UPDATE_PRACTICE_DURATION,
  val,
});
export const updateNumberDailyPracticeSessions = (val) => ({
  type: UPDATE_NUMBER_DAILY_PRACTICE_SESSIONS,
  val,
});

export const addProgram = (val) => ({
  type: ADD_PROGRAM,
  val,
});

export const removeProgram = (val) => ({
  type: REMOVE_PROGRAM,
  val,
});
