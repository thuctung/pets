import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ProductListManagePage from '../pages/ProductListManagePage/ProductListManagePage'
import { connect } from 'react-redux'
import * as actionsProduct from '../actions/ActionProducts'

const ProductListMangeContainer = props => {
    const { products, actionGetProductsRequest, actionDeleteProductRequest } = props

    useEffect(() => {
        actionGetProductsRequest()
    }, [])

    const onDeleteProduct = idProduct => {
        if (confirm(`Are you sure you want to delete?`)) { //eslint-disable-line
            actionDeleteProductRequest(idProduct)
        }
    }

    return (
        <>
            < ProductListManagePage
                products={products}
                onDeleteProduct={onDeleteProduct}
            />
        </>
    )

}

ProductListMangeContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        status: PropTypes.bool.isRequired,
        imgURL: PropTypes.string.isRequired
    })).isRequired,
    actionGetProductsRequest: PropTypes.func.isRequired,
    actionDeleteProductRequest: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actionGetProductsRequest: () => dispatch(actionsProduct.actionGetProductsRequest()),
        actionDeleteProductRequest: idProduct => dispatch(actionsProduct.actionDeleteProductRequest(idProduct))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListMangeContainer)
