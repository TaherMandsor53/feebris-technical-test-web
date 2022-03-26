import { combineReducers } from 'redux';

import careHomeReducer from './careHomeReducer';
import patientReducer from './patientReducer';
import patientGpReducer from './patientGpReducer';

export default combineReducers({
  careHomeReducer,
  patientReducer,
  patientGpReducer,
});
