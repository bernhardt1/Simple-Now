export const ADD_PROGRAM = 'ADD_PROGRAM';
export const REMOVE_PROGRAM = 'REMOVE_PROGRAM';
export const UPDATE_CURRENT_PRACTICE = 'UPDATE_CURRENT_PRACTICE';
export const UPDATE_CURRENT_PRACTICE_PROGRESS =
  'UPDATE_CURRENT_PRACTICE_PROGRESS';
export const UPDATE_PRACTICE_DURATION = 'UPDATE_PRACTICE_DURATION';
export const UPDATE_NUMBER_DAILY_PRACTICE_SESSIONS =
  'UPDATE_NUMBER_DAILY_PRACTICE_SESSIONS';
export const RESET_CURRENT_PRACTICE = 'RESET_CURRENT_PRACTICE';

export const resetCurrentPractice = (val) => ({
  type: RESET_CURRENT_PRACTICE,
  val,
});
export const updateCurrentPractice = (obj) => ({
  type: UPDATE_CURRENT_PRACTICE,
  obj,
});
export const updateCurrentPracticeProgress = (val) => ({
  type: UPDATE_CURRENT_PRACTICE_PROGRESS,
  val,
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
