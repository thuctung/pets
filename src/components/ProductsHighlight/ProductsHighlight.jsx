import React from 'react'
import './ProductsHighlight.scss'
import PropTypes from 'prop-types'
import ProductItem from '../../components/ProductItem/ProductItem'
import { connect } from 'react-redux'
import { addToCart } from '../../actions/ActionCart'
const ProductsHighlight = props => {
    const { title, products, addToCart } = props
    const showProductItem = arr => {
        let result = null
        if (arr.length > 0) {
            const getTenItem = arr.slice(0, 10)
            result = getTenItem.map((item, index) => {
                return <ProductItem key={index} product={item} addToCart={addToCart} />
            })
        }
        return result
    }
    return (
        <div className="list">
            <div className="panel-title">
                <h3>{title}</h3>
            </div>
            <div className="highlight-product-list">
                {showProductItem(products)}
            </div>
        </div>
    )
}

ProductsHighlight.propTypes = {

}
const mapDispatchToProps = dispatch => {
    return {
        addToCart: products => dispatch(addToCart(products))
    }
}
export default connect(null, mapDispatchToProps)(ProductsHighlight)
