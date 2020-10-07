import { combineReducers } from 'redux';

import courses from './courses';
import navigation from './navigation.js';

const rootReducer = combineReducers({
  courses,
  navigation,
});

export default rootReducer;
