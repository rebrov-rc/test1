import { ActionType, orderObject, selectedOrderType } from "../../Types/types";
import { REMOVE_SELECTED_ORDER, SET_SELECTED_ORDER } from "../Actions/actions";

interface ISelectedOrderType {
    order ?: orderObject;
}

const selectedObjectDefault : {order : {}} = {
    order: {}
}

const selectedOrder = (obj : {order : {}} = selectedObjectDefault , action: ActionType) : ISelectedOrderType | {order : {}}  => {
    switch (action.type) {
        case SET_SELECTED_ORDER:
            let newObject : ISelectedOrderType | {order : {}} = { 
                order: { ...action.payload },
            }

            return newObject;
    
        case REMOVE_SELECTED_ORDER :
            let removeObject : {order: {}} =  {
                order: {}
            }
            return removeObject;
        default:
            return obj;
    }

}

export default selectedOrder;