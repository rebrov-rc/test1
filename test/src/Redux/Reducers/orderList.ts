import React from 'react'
import { orderObject } from '../../Types/types';
import { SET_ORDER_LIST_ACTION } from "../Actions/actions";

interface ActionProps {
    type : string,
    payload : orderObject[]
}


const ordertList = ( orderListDef = [],  action : ActionProps ) : orderObject[] => {
    switch (action.type) {
        case SET_ORDER_LIST_ACTION:
            
            let res = [...action.payload];
            return res;
    
        default:
            return orderListDef
    }

}

export default ordertList;