export type ActionType = {
    type : string,
    payload : {}
}


export type State = {
    ordertList : {}[],
    selectedOrder: selectedOrderType
}

export type Goods = {
    id: string,
    name: string,
    count: number,
    price: number
}

export type orderObject = {
    number : string,
    id : string,
    sale: number,
    date ?: string,
    goods :  Goods[]
}

export type selectedOrderType = {
    order : orderObject,
}