import { combineReducers } from 'redux';

import content from './content';
import practice from './practice';
import navigation from './navigation';
import notifications from './notifications';
import settings from './settings';

const rootReducer = combineReducers({
  content,
  practice,
  navigation,
  notifications,
  settings,
});

export default rootReducer;
