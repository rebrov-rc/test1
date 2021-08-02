import React from 'react'
import  '../SASS/card.sass'
import { Goods, orderObject } from '../Types/types';

interface Props {
    obj : orderObject,
    manageViewer: (type: string) => void,
    select: (object : orderObject) => void
}

const countFunstion = (obj : Goods[]) : number => {
    let result : number = 0; 
    for (let i = 0; i < obj.length; i++) {
        const el = obj[i].count;
        result += el;
    }
    return result;
}

const totalCost = (obj : { price: number , count : number}[] ) : number => {
    let totalResult : number = 0;

    for (let i = 0; i < obj.length; i++) {
        const el = obj[i];
        totalResult += el.price * el.count;
    }
    return totalResult;
}


const Card : React.FC<Props> = ( props  ) => {

    const takeViewer = (object : orderObject) => {
        props.select(object);
        props.manageViewer('open')
    }

    return (
        <div className='card-wrap '   onClick={ () =>  takeViewer(props.obj) }>
            <div className="card-title-wrap">
                <div className="card-order-number">
                    <span>Заказ №</span>
                    <span>
                        { props.obj.number }
                    </span>
                </div>
                <div className="card-cost-wrap">
                    <span>
                        { Math.floor( totalCost( props.obj.goods) - props.obj.sale ) } р
                    </span>
                </div>
            </div>

            <div className="card-counting-goods">
                <div className="">
                    <span>товаров: </span>
                    <span> { countFunstion(props.obj.goods) } </span>
                </div>
                <div className="">
                    <span>
                        наименований: { props.obj.goods.length }
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Card
