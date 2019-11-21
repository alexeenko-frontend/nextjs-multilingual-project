import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  watchConnectionError,
  watchHandleConnectionError
} from "scenes/ErrorPage/saga";

const FIELD_VALID_ERROR = 422;

function* getMidleware({ req, params, success, error, postSuccessEffect }) {
  try {
    const data = yield call(req, params);

    // if (data.success) {
    if (!data.error) {
      yield put(success(data));

      if (postSuccessEffect) yield postSuccessEffect(data);
    } else if (data.error) {
      yield put(error && error({}));
      yield call(watchHandleConnectionError, data.error.error_code);
    }
  } catch (err) {
    yield put(error && error({}));
    yield call(watchConnectionError);
  }
}

function* postMidleware({ req, params, success, error, postSuccessEffect }) {
  try {
    const data = yield call(req, params);

    // if (data.success) {
    if (!data.error) {
      yield put(success(data));

      if (postSuccessEffect) yield postSuccessEffect(data);
    } else if (data.error) {
      yield put(error && error({}));
      yield call(watchHandleConnectionError, data.error.error_code);
    }
  } catch {
    yield put(error && error({}));
    yield call(watchConnectionError);
  }
}

export { getMidleware, postMidleware };
