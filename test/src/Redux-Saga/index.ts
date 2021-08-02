import { all } from "redux-saga/effects";
import { getOrdersSagaWatcher } from "./getProductSaga";

export  function*  rootWatcher() {
    yield all([
        getOrdersSagaWatcher()
    ])
}