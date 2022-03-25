import { takeLatest, call, put } from 'redux-saga/effects';

import * as types from '../action/actionTypes';
import { getCareHomeDetails } from '../api/api';

function* careHomeSaga(action) {
  try {
    const careDetails = yield call(getCareHomeDetails);
    yield put({
      type: types.GET_CARE_HOME_SUCCESS,
      careHomeDetails: careDetails.data,
    });
  } catch (e) {
    yield put({ type: types.GET_CARE_HOME_ERROR, message: e.message });
  }
}

function* getCareHomeSaga() {
  yield takeLatest(types.GET_CARE_HOME_REQUEST, careHomeSaga);
}

export default getCareHomeSaga;
