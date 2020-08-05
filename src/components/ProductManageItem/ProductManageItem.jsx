import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as formatMoney from '../../commonFunctions/formatMoney'
const ProductManageItem = props => {
    const { product, index, onDeleteProduct } = props
    console.log()
    const { id, name, price, status, imgURL } = product
    const statusName = status ? 'yet' : 'effete'
    const statusClass = status ? 'primary' : 'warning'
    return (
        <tr>
            <td>{index}</td>
            <td>{id}</td>
            <td>{name}</td>
            <td>{formatMoney.coverToVND(price)}</td>
            <td><img width="100px" height="100px" src={imgURL} alt="" /></td>
            <td><span className={`label label-${statusClass}`}>{statusName}</span></td>
            <td>
                <Link to={`/product/edit/${id}`} className="btn btn-success mr-10">Edit</Link>
                <button className="btn btn-danger" onClick={() => onDeleteProduct(id)}>Delete</button>
            </td>
        </tr>
    )
}

ProductManageItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        status: PropTypes.bool.isRequired,
        imgURL: PropTypes.string.isRequired
    }).isRequired,
    index: PropTypes.number,
    onDeleteProduct: PropTypes.func.isRequired
}

export default ProductManageItem
