import { take, takeEvery, takeLatest, put, delay } from "redux-saga/effects";

export function* onIncrement() {
  yield console.log("incremented using takeEvery or takeLatest effect!");
}

// export function* incrementSaga() {
//   yield takeEvery("INCREMENT", onIncrement);
// }

// export function* incrementSaga() {
//   yield take("INCREMENT");
//   console.log("I am incremented using take effect!");
// }

export function* onIncrementLatest() {
  yield console.log("pre delay");
  yield delay(3000);
  yield put({ type: "INCREMENT_FROM_SAGA" });
}

export function* incrementSaga() {
  yield takeLatest("INCREMENT", onIncrementLatest);
}
