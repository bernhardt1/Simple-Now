export const UPDATE_PLAN_ID = 'UPDATE_PLAN_ID';
export const UPDATE_BACKGROUND = 'UPDATE_BACKGROUND';
export const UPDATE_IS_SOUND_ON = 'UPDATE_IS_SOUND_ON';

export const updatePlanId = (val) => ({
  type: UPDATE_PLAN_ID,
  val,
});

export const updateBackground = (val) => ({
  type: UPDATE_BACKGROUND,
  val,
});

export const updateIsSoundOn = (val) => ({
  type: UPDATE_IS_SOUND_ON,
  val,
});
