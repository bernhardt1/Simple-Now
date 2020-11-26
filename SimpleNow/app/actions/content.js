export const RESET_ALL_CONTENT = 'RESET_ALL_CONTENT';
export const UPDATE_CONTENT_COMPLETE = 'UPDATE_CONTENT_COMPLETE';

export const resetAllContent = (val) => ({
  type: RESET_ALL_CONTENT,
  val,
});

export const updateContentComplete = (val) => ({
  type: UPDATE_CONTENT_COMPLETE,
  val,
});
