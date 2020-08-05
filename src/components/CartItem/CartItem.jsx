import React from 'react'
import * as format from '../../commonFunctions/formatMoney'
import './CartItem.scss'
const CartItem = props => {
    const { deleteItemCart, incrementItem } = props
    const { product, count } = props.item
    const { id, name, price, imgURL, status, description } = product
    return (
        <div className="item">
            <img src={imgURL} />
            <h5 className="name">{name}</h5>
            <span className="price">{format.coverToVND(price)}</span>
            <div className="update">
                <button className="btn btn-increment" onClick={() => incrementItem(id, count - 1)}>-</button>
                <span className="count">{count}</span>
                <button className="btn btn-reduction" onClick={() => incrementItem(id, count + 1)}>+</button>
            </div>
            <button className="btn btn-delete" onClick={() => deleteItemCart(id)}>X</button>
        </div>
    )
}

export default CartItem
