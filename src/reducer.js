import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import features from "features";

export const rootReducers = combineReducers({
  home: features.home.reducer
});

export const rootSagas = function* rootSaga() {
  yield all([features.home.saga()]);
};
