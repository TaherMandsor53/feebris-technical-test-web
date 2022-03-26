import * as types from '../action/actionTypes';

const initialState = {
  isFetching: false,
  patientGpDetails: [],
};

export default function patientGpReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_PATIENT_GP_DETAILS_REQUEST:
      return { ...state, isFetching: true };

    case types.GET_PATIENT_GP_DETAILS_SUCCESS:
      return { isFetching: false, patientGpDetails: action.patientGpDetails };

    case types.GET_PATIENT_GP_DETAILS_ERROR:
      return { ...state, isFetching: false, error: action.message };
    default:
      return state;
  }
}
