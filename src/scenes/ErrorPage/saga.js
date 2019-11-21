import { call, put, takeLatest, fork } from "redux-saga/effects";
import { createNotification } from "react-redux-notify";

import features from "features";

const errors = {
  INVALID_TOKEN: 403,
  SERVER_OVERLOAD: 500 // change to real code
};

const createErrorMessage = message =>
  createNotification({
    duration: 5000,
    error: true,
    message
  });

export function* watchHandleConnectionError(param) {
  switch (param) {
    case errors.INVALID_TOKEN:
      return yield put(features.login.actions.logout());
    case errors.SERVER_OVERLOAD:
      return yield console.error("SERVER OVERLOAD");
    default: {
      yield put(
        createErrorMessage(
          "Произошла ошибка, перезагрузите страницу или попробуйте позже"
        )
      );
      yield console.error(
        `WatchHandleConnectionError\n Uncautch error_code: ${param}`
      );
    }
    // yield throw {
    //   status_code: 505,
    //   description: "Server overload"
    // };
  }
}

export function* watchConnectionError() {
  yield put(
    createErrorMessage(
      "Сервер не отвечает, перезагрузите страницу или  попробуйте позже"
    )
  );
}
