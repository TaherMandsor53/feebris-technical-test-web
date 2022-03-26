import { takeLatest, call, put } from 'redux-saga/effects';

import * as types from '../action/actionTypes';
import { getPatientGpDetails } from '../api/api';

function* patientGpDetailsSaga(action) {
  try {
    const patientGpDetails = yield call(getPatientGpDetails);
    yield put({
      type: types.GET_PATIENT_GP_DETAILS_SUCCESS,
      patientGpDetails: patientGpDetails.data,
    });
  } catch (e) {
    yield put({ type: types.GET_PATIENT_GP_DETAILS_ERROR, message: e.message });
  }
}

function* getPatientGpDetailsSaga() {
  yield takeLatest(types.GET_PATIENT_GP_DETAILS_REQUEST, patientGpDetailsSaga);
}

export default getPatientGpDetailsSaga;
