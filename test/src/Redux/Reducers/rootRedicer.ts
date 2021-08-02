import { combineReducers } from "redux"
import ordertList from "./orderList"
import selectedOrder from "./selectedOrder";

const rootReducers = combineReducers({
    ordertList: ordertList,
    selectedOrder: selectedOrder
})

export default rootReducers;