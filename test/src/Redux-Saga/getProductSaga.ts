import { call, put, takeEvery, SagaReturnType } from "redux-saga/effects"
import { getOrderAPI } from "../APIs/api"
import { setOrderActionCreater } from "../Redux/Actions/actions";
import { ASYNC_GET_ORDER_LIST } from "../Redux/Actions/AsyncActions";



function*  getOrderWorker ( )  {
    try {
        const orders : SagaReturnType<typeof getOrderAPI> = yield call(getOrderAPI );
        yield put(setOrderActionCreater(orders))
    } catch (err) {
        
    }
}

export function* getOrdersSagaWatcher() {
    yield takeEvery(ASYNC_GET_ORDER_LIST, getOrderWorker)
}
