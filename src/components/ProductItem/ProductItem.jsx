import React from 'react'
import PropTypes from 'prop-types'
import { FaShoppingCart, FaInfo } from 'react-icons/fa'
import * as format from '../../commonFunctions/formatMoney'
import './ProductItem.scss'
import { Link } from 'react-router-dom'
const ProductItem = props => {
    const { addToCart } = props
    const { id, name, price, imgURL, status, description } = props.product
    return (
        <div className="product-item">
            <img src={imgURL} />
            <span className="name">{name}</span>
            <span className="price">{format.coverToVND(price)}</span>
            <p className="description">
                {description}.
            </p>
            <div className="feature">
                <span className="btn add-cart" onClick={() => addToCart(props.product)}><FaShoppingCart /></span>
                <Link to={`/detail/${id}`}><span className="btn view-detail"><FaInfo /></span></Link>
            </div>
        </div>
    )
}

ProductItem.propTypes = {

}

export default ProductItem
