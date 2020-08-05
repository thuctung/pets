import React, { useEffect, useState } from 'react'
import ProductActionManagePage from '../pages/ProductActionManagePage/ProductActionManagePage'
import callAPi from '../utils/apiCaller'
import * as endpointResource from '../constants/EndPointResource'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actionsProduct from '../actions/ActionProducts'

const ProductActionContainer = props => {
    const {
        match,// đối tượng được truyền từ router
        history,// đối tượng được truyền từ router
        product,
        actionGetProductRequest,
        actionCreateProductRequest,
        actionUpdateProductRequest } = props


    useEffect(() => {
        if (match) { // thực hiện khi nhận được khi nhấn edit
            const id = match.params.id //  lấy idProduct từ nút edit trong component ProductItem
            actionGetProductRequest(id)
        }
    }, [])

    const onActionProduct = product => { // update or create product i
        if (product.id) {
            actionUpdateProductRequest(product)// update product
            history.goBack()
        } else {
            actionCreateProductRequest(product)  // add new product
            history.goBack()
        }
    }

    return (
        <div>
            <ProductActionManagePage
                product={product}
                onActionProduct={onActionProduct}
            />
        </div>
    )
}

ProductActionContainer.propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    product: PropTypes.object,
    actionCreateProductRequest: PropTypes.func.isRequired,
    actionGetProductRequest: PropTypes.func.isRequired
}
const mapStateToProps = state => {
    return {
        product: state.itemEditing
    }
}
const mapDispatchToProps = dispatch => {
    return {
        actionCreateProductRequest: product => dispatch(actionsProduct.actionCreateProductRequest(product)),
        actionUpdateProductRequest: product => dispatch(actionsProduct.actionUpdateProductRequest(product)),
        actionGetProductRequest: idProduct => dispatch(actionsProduct.actionGetProductRequest(idProduct)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionContainer)
