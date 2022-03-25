import * as types from '../action/actionTypes';

const initialState = {
  isFetching: false,
  careHomeDetails: [],
};

export default function careHomeReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_CARE_HOME_REQUEST:
      return { ...state, isFetching: true };

    case types.GET_CARE_HOME_SUCCESS:
      return { isFetching: false, careHomeDetails: action.careHomeDetails };

    case types.GET_CARE_HOME_ERROR:
      return { ...state, isFetching: false, error: action.message };

    default:
      return state;
  }
}
