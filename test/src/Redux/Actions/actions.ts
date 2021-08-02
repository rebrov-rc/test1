import { ActionType, orderObject } from "../../Types/types";

export const SET_ORDER_LIST_ACTION : string = 'SET_ORDER_LIST_ACTION';
export const  SET_SELECTED_ORDER : string =  'SET_SELECTED_ORDER'
export const  REMOVE_SELECTED_ORDER : string =  'REMOVE_SELECTED_ORDER'

interface IActionCreaters {
    type: string;
    payload: void | orderObject[]
}

export const setOrderActionCreater = ( list : void | orderObject[] ) : IActionCreaters => ({
    type : SET_ORDER_LIST_ACTION,
    payload : list
})

export const setSelectedOrderActionCreater = ( order : orderObject ) :  ActionType => ({
    type : SET_SELECTED_ORDER,
    payload : order
})