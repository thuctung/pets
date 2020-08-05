import React from 'react'
import './Cart.scss'
const Cart = props => {
    return (
        <div className="cart-component">
            <div className="content">
                <div className="title">
                    <h2>Giỏ hàng</h2>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default Cart
