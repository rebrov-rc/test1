import React from 'react'
import { Goods,  selectedOrderType } from '../../Types/types';
import '../../SASS/goodsListStyle.sass'


interface Props {
    selectedObj:  selectedOrderType ;
    manageViewer: (type: string) => void;
}


const GoodsList : React.FC<Props> = ( props ) => {  

    const [animationsEffect, setAnimations] = React.useState<string>("open");


    const closeWindow = () : void => {
        setAnimations('close');
        setTimeout(() => {
            props.manageViewer('close');
        }, 300)
    }
    
    const totalCost = (obj : { price: number , count : number}[] ) : number => {
        let totalResult : number = 0;

        for (let i = 0; i < obj.length; i++) {
            const el = obj[i];
            totalResult += el.price * el.count;
        }
        return totalResult;
    }

    const saleProcent = () : number => {
        let total : number = totalCost(props.selectedObj.order.goods);
        total = total / props.selectedObj.order.sale;
        let res = 100 / total;
        return (Math.floor(res));
    }

    return (
        <div className={ 'goods-list-container-wrap  ' + animationsEffect } >
            <div className="goods-list-title">
                <div className="goods-list-title-order-number">
                    <span>Заказ №</span>
                    <span>{props.selectedObj.order.number}</span>
                </div>
                <div className="close-window" onClick={() => { closeWindow() }}>&#x2715;</div>
            </div>
            <div className="goods-list-second-title">
                <div className="goods-list-second-title-top">
                    <span>Товар</span>
                </div>
                    <div className="goods-list-second-title-bottom">Название наименование товара</div>
            </div>
            <div className="goods-list-array-block-container">
                    {props.selectedObj.order.goods.map((item : Goods) => {
                        return (
                            <div className="goods-list-item">
                                <div className="goods-list-array-name-and-count">
                                    <div className="goods-list-array-name"> { item.name } </div>
                                    <div className="goods-list-array-count"> <span>Количество </span>  { item.count } шт.  </div>
                                </div>
                                <div className="goods-list-array-cost">  { Math.floor( item.price * item.count ) } <span> p</span> </div>
                            </div>
                        )
                    })}
            </div>

            <div className="goods-list-sale-of-order ">
                <span>Скидка по заказу составила: </span>
                <span>  { saleProcent() }%</span> 
            </div>
            <div className="goods-list-total">
                    <div className="goods-list-total-center">
                        <span>ИТОГО  </span> 
                        <span>   
                            {' : ' + Math.floor( totalCost( props.selectedObj.order.goods) - props.selectedObj.order.sale ) } 
                             </span>
                    </div>
            </div>
            <div className="goods-list-info">
                <div>
                    <span>
                            Дата выдачи заказа 10 дней с момента оплаты
                    </span>
                </div>
            </div>
        </div>
    )
}



export default GoodsList;