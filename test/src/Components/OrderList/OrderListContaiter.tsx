import React from 'react'
import { connect } from 'react-redux'
import { setSelectedOrderActionCreater } from '../../Redux/Actions/actions'
import { ActionType, orderObject } from '../../Types/types'
import OrderList from './OrderList'
 
type orderListType = {
    ordertList: orderObject[]
}

interface Props {
    manageViewer: (type: string) => void;
}

interface StateToProps {
    orders: orderObject[];
    manageViewer: (type: string) => void;
}

const OrderListContaiter  : React.FC<Props> = ( props ) => {

    const matStateToProps = (state : orderListType): StateToProps  =>( {
        orders: state.ordertList,
        manageViewer: props.manageViewer
    })


    const mapDispatchToProps = (dispatch : (action : ActionType) => void) =>  ({
        setSelectObject : ( object : orderObject ) : void => {
            
            dispatch(setSelectedOrderActionCreater(object));
        }
    })

    const OrderListWrap = connect(matStateToProps, mapDispatchToProps)(OrderList)
    return ( <OrderListWrap/>  )
}

export default OrderListContaiter
