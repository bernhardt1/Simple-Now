export const ADD_PROGRAM = 'ADD_PROGRAM';
export const REMOVE_PROGRAM = 'REMOVE_PROGRAM';

export const addProgram = (val) => ({
  type: ADD_PROGRAM,
  val,
});

export const removeProgram = (val) => ({
  type: REMOVE_PROGRAM,
  val,
});
