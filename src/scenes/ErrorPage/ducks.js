export const actionTypes = {
  SET_ERROR: "SET_ERROR"
};

const INITIAL_STATE = {
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export const actions = {
  setError: payload => ({
    type: actionTypes.SET_ERROR,
    payload
  })
};
