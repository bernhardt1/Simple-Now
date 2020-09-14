import {combineReducers} from 'redux';

import awarenessBeginner from './awarenessBeginner';
import navigation from './navigation.js';

const rootReducer = combineReducers({
  awarenessBeginner,
  navigation,
});

export default rootReducer;
