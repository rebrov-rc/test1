import React from 'react'
import { connect } from 'react-redux'
import GoodsList from './GoodsList'
import {  selectedOrderType, State } from '../../Types/types'


interface Props {
    manageViewer: (type: string) => void
}

interface StateToProps {
    selectedObj: selectedOrderType,
    manageViewer: (type: string) => void
}

const GoodsListContainer : React.FC<Props> = (props ) => {


    const mapStateToProps = (state : State)  : StateToProps  => ( {
        selectedObj : state.selectedOrder,
        manageViewer: props.manageViewer
    })

    const GoodsListWrap  = connect(mapStateToProps)(GoodsList)
    return ( <GoodsListWrap/> )
}

export default GoodsListContainer
