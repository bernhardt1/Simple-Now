import { combineReducers } from 'redux';

import content from './content';
import practice from './practice';
import navigation from './navigation';
import settings from './settings';

const rootReducer = combineReducers({
  content,
  practice,
  navigation,
  settings,
});

export default rootReducer;
