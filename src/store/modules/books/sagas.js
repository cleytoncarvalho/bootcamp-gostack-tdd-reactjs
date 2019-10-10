import { call, put } from "redux-saga/effects";

import api from "~/services/api";

import { getBooksSuccess, getBooksFailure } from "./actions";

export function* getBooks() {
  try {
    const response = yield call(api.get, "/books");

    yield put(getBooksSuccess(response.data));
  } catch (error) {
    yield put(getBooksFailure());
  }
}
