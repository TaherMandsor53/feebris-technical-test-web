import { fork } from 'redux-saga/effects';
import getCareHomeSaga from './careHomeSaga';
import getPatientDetailsSaga from './patientDetailsSaga';
import getPatientGpDetailsSaga from './patientGpDetailsSaga';

function* sagas() {
  yield fork(getCareHomeSaga);
  yield fork(getPatientDetailsSaga);
  yield fork(getPatientGpDetailsSaga);
}

export default sagas;
