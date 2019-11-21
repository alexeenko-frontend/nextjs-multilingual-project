export const actionTypes = {
  FETCH_DATA_REQUEST: "FETCH_DATA_REQUEST",
  FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
  FETCH_DATA_ERROR: "FETCH_DATA_ERROR"
};

const INITIAL_STATE = {
  loading: true,
  data: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_REQUEST:
      loading: true;
    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        data: action.payload
      };
    case actionTypes.FETCH_DATA_ERROR:
      return {
        error: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export const actions = {
  fetchDataRequest: () => ({
    type: actionTypes.FETCH_DATA_REQUEST
  }),
  fetchDataSuccess: payload => ({
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload
  }),
  fetchDataError: payload => ({
    type: actionTypes.FETCH_DATA_ERROR,
    payload
  })
};
