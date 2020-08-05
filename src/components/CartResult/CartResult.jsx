import React from 'react'
import * as format from '../../commonFunctions/formatMoney'
import './CartResult.scss'
const CartResult = props => {
    const money = props.money

    return (
        <div className="cart-result">
            <h3>Tổng tiền: <span>{format.coverToVND(money)}</span></h3>
            <button className="btn btn-buy">Mua</button>
        </div>
    )
}

export default CartResult
