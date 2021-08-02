import React from 'react'
import '../../SASS/orderListStyle.sass'
import { orderObject } from '../../Types/types';
import Card from '../Card';
import {useDispatch} from 'react-redux'
import { ASYNC_GET_ORDER_LIST } from '../../Redux/Actions/AsyncActions';


    
    interface PropsInt {
        orders: orderObject[] ;
        manageViewer: (type: string) => void;
        setSelectObject: (object : orderObject) => void;
    }
    
    
    const OrderList : React.FC<PropsInt>  = ( props ) => {
        
        const dispatch  = useDispatch();

    React.useEffect(() => {
        if (props.orders.length === 0){dispatch({ type: ASYNC_GET_ORDER_LIST })}
        
      }, [ ])
    

    return (
        <div className='order-list-container '>
            
            <div className="order-list-title">
                <div className="title">
                    <span>Список заказов</span>
                </div>
                <div className="order-list-filter">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.38C12.04 17.68 11.94 18 11.71 18.21C11.32 18.6 10.69 18.6 10.3 18.21L6.28999 14.2C6.05999 13.97 5.95999 13.66 5.99999 13.37V8.25L1.21 2.12C0.869995 1.69 0.949995 1.06 1.38 0.72C1.57 0.58 1.77999 0.5 1.99999 0.5H16C16.22 0.5 16.43 0.58 16.62 0.72C17.05 1.06 17.13 1.69 16.79 2.12L12 8.25V17.38ZM4.03999 2.5L7.99999 7.56V13.08L10 15.08V7.55L13.96 2.5H4.03999Z" fill="black"/>
                    </svg>

                </div>
            </div>

            <div className="order-list-cards-wrap">
                {
                    props.orders.length > 0 && props.orders.map((element : orderObject)   => {
                        return <Card key={element.id}
                                                obj={element}
                                                select={props.setSelectObject}
                                                manageViewer = {props.manageViewer}
                                                />
                    })
                }
            </div>

        </div>
    )
}

export default OrderList
