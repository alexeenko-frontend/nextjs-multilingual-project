import { call, put, takeLatest } from "redux-saga/effects";

import { actionTypes, actions as homeActions } from "./ducks";
import { getMidleware } from "utils";
import * as API from "services/API";

function* getData() {
  const req = API.getData;
  const { fetchDataSuccess: success, fetchDataError: error } = homeActions;

  yield getMidleware({ req, success, error });
}

export default function* watchSaga() {
  yield takeLatest(actionTypes.FETCH_DATA_REQUEST, getData);
}
