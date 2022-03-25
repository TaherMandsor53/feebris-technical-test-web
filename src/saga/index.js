import { fork } from 'redux-saga/effects';
import getCareHomeSaga from './careHomeSaga';
import getPatientDetailsSaga from './patientDetailsSaga';

function* sagas() {
  yield fork(getCareHomeSaga);
  yield fork(getPatientDetailsSaga);
}

export default sagas;
