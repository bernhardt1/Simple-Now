import { combineReducers } from 'redux';

import courses from './courses';
import navigation from './navigation';
import settings from './settings';

const rootReducer = combineReducers({
  courses,
  navigation,
  settings,
});

export default rootReducer;
