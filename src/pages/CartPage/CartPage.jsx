import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Cart from '../../components/Cart/Cart'
import CartItem from '../../components/CartItem/CartItem'
import CartResult from '../../components/CartResult/CartResult'
import * as actionsCart from '../../actions/ActionCart'
const CartPage = props => {
    const { cart, deleteItemCart, incrementItem } = props
    const onShowCart = arrItem => {
        let result = null
        if (arrItem.length > 0) {
            result = arrItem.map((itemCart, index) => {
                return <CartItem
                    key={index}
                    item={itemCart}
                    deleteItemCart={deleteItemCart}
                    incrementItem={incrementItem}
                />
            })
        }
        return result
    }
    const countMoneyCart = cart => {
        let count = 0
        if (cart.length > 0) {
            count = cart.reduce((money, item) => {
                return money += (item.product.price * item.count)
            }, 0)
        }
        return count
    }
    return (
        <Cart>
            {onShowCart(cart)}
            <CartResult money={countMoneyCart(cart)} />
        </Cart>
    )
}

CartPage.propTypes = {

}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        deleteItemCart: idProduct => dispatch(actionsCart.deleteItemCart(idProduct)),
        incrementItem: (idProduct, count) => dispatch(actionsCart.updateNumItem(idProduct, count))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
