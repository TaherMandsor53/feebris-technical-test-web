import { combineReducers } from 'redux';

import careHomeReducer from './careHomeReducer';
import patientReducer from './patientReducer';

export default combineReducers({
  careHomeReducer,
  patientReducer,
});
