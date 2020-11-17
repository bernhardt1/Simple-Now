import { combineReducers } from 'redux';

import courses from './courses';
import practice from './practice';
import navigation from './navigation';
import settings from './settings';

const rootReducer = combineReducers({
  courses,
  practice,
  navigation,
  settings,
});

export default rootReducer;
