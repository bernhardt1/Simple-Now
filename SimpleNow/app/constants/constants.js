import { Platform } from 'react-native';

export const IAP_SKUS = Platform.select({
  ios: ['1MONTH', '1YEAR'],
});

export const API_URL = '';
// EXERCISE SCREEN TYPES
const INSTRUCTION_EXERCISE_SCREEN = 'instruction';

// EXERCISE METHOD TYPES
const BREATH_EXERCISE = 'breath';
const SENSATION_EXERCISE = 'sensation';
const THOUGHT_EXERCISE = 'thought';
const HEAR_EXERCISE = 'hear';
const SEE_EXERCISE = 'see';
const SENSE_EXERCISE = 'sense';
const SELF_AWARENESS_EXERCISE = 'awareness';
const QUESTION_EXERCISE = 'question';

// interval times
const NONE = {
  name: 'None',
  val: 0,
};
const MINUTE = {
  name: 'Every minute',
  val: 60,
};
const TWO_MINUTES = {
  name: 'Every 2 minutes',
  val: 120,
};
const FIVE_MINUTES = {
  name: 'Every 5 minutes',
  val: 300,
};
const TEN_MINUTES = {
  name: 'Every 10 minutes',
  val: 600,
};
const THIRTY_MINUTES = {
  name: 'Every 30 minutes',
  val: 1800,
};
const SIXTY_MINUTES = {
  name: 'Every 60 minutes',
  val: 3600,
};

// URL & LINKING
const URL_HEADER = 'simple-now://';

export {
  INSTRUCTION_EXERCISE_SCREEN,
  BREATH_EXERCISE,
  SENSATION_EXERCISE,
  THOUGHT_EXERCISE,
  HEAR_EXERCISE,
  SEE_EXERCISE,
  SENSE_EXERCISE,
  SELF_AWARENESS_EXERCISE,
  QUESTION_EXERCISE,
  URL_HEADER,
  NONE,
  MINUTE,
  TWO_MINUTES,
  FIVE_MINUTES,
  TEN_MINUTES,
  THIRTY_MINUTES,
  SIXTY_MINUTES,
};
