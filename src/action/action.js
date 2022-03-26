import * as types from './actionTypes';

export function getCareHomeDetails() {
  return {
    type: types.GET_CARE_HOME_REQUEST,
  };
}

export function getPatientDetails() {
  return {
    type: types.GET_PATIENT_DETAILS_REQUEST,
  };
}

export function getPatientGpDetails() {
  return {
    type: types.GET_PATIENT_GP_DETAILS_REQUEST,
  };
}
