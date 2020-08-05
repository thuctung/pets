import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header/Header'
import Search from '../components/Search/Search'
import { connect } from 'react-redux'
const HeaderContainer = props => {
    const { cart } = props
    const onCountItemInCart = cart => {
        let result = 0
        if (cart.length > 0) {
            result = cart.reduce((count, item) => {
                return count += item.count
            }, 0)
        }
        return result
    }
    const onSearchValue = keywords => {
        console.log(keywords)
    }

    return (
        <Header countItemInCart={onCountItemInCart(cart)}>
            <Search onSearchValue={onSearchValue} />
        </Header>
    )
}

HeaderContainer.propTypes = {

}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps, null)(HeaderContainer)
