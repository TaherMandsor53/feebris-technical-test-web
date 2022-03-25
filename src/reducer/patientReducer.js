import * as types from '../action/actionTypes';

const initialState = {
  isFetching: false,
  patientDetails: [],
};

export default function patientReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_PATIENT_DETAILS_REQUEST:
      return { ...state, isFetching: true };

    case types.GET_PATIENT_DETAILS_SUCCESS:
      return { isFetching: false, patientDetails: action.patientDetails };

    case types.GET_PATIENT_DETAILS_ERROR:
      return { ...state, isFetching: false, error: action.message };
    default:
      return state;
  }
}
