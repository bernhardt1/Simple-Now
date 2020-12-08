import { combineReducers } from 'redux';

import content from './content';
import practice from './practice';
import navigation from './navigation';
import onboarding from './onboarding';
import notifications from './notifications';
import settings from './settings';

const rootReducer = combineReducers({
  content,
  practice,
  navigation,
  onboarding,
  notifications,
  settings,
});

export default rootReducer;
