import { takeLatest, call, put } from 'redux-saga/effects';

import * as types from '../action/actionTypes';
import { getPatientDetails } from '../api/api';

function* patientDetailsSaga(action) {
  try {
    const patientDetails = yield call(getPatientDetails);
    yield put({
      type: types.GET_PATIENT_DETAILS_SUCCESS,
      patientDetails: patientDetails.data,
    });
  } catch (e) {
    yield put({ type: types.GET_PATIENT_DETAILS_ERROR, message: e.message });
  }
}

function* getPatientDetailsSaga() {
  yield takeLatest(types.GET_PATIENT_DETAILS_REQUEST, patientDetailsSaga);
}

export default getPatientDetailsSaga;
