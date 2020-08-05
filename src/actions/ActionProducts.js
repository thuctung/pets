import * as types from '../constants/ActionTypes'
import callAPi from '../utils/apiCaller'
import * as endpointResource from '../constants/EndPointResource'

export const actionGetProductsRequest = () => {
    return dispatch => { // dispatch of store-redux
        return callAPi(endpointResource.PRODUCTS, 'GET')
            .then(({ data }) => dispatch(getProducts(data))) // get product from server to store by dispatch
    }
}
export const getProducts = products => {
    return {
        type: types.FETCH_PRODUCT,
        products
    }
}

// Delete on server success then delete on store-redux
export const actionDeleteProductRequest = idProduct => {
    return dispatch => {
        return callAPi(`${endpointResource.PRODUCTS}/${idProduct}`, 'DELETE')
            .then(res => {
                dispatch(deleteProduct(idProduct))
            })
    }
}

export const deleteProduct = idProduct => {
    return {
        type: types.DELETE_PRODUCT,
        idProduct
    }
}

export const actionCreateProductRequest = product => {
    return dispatch => {
        return callAPi(endpointResource.PRODUCTS, 'POST', product)
            .then(res => {
                dispatch(addProduct(res.data))
            })
    }
}
export const addProduct = product => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}


export const actionUpdateProductRequest = product => {
    return dispatch => {
        return callAPi(`${endpointResource.PRODUCTS}/${product.id}`, 'PUT', product)
            .then(res => {
                if (res.status === 200) {
                    dispatch(updateProduct(product))
                }
            })
    }
}
export const updateProduct = product => {
    return {
        type: types.UPDATE_PRODUCT,
        product
    }
}


export const actionGetProductRequest = idProduct => {
    return dispatch => {
        return callAPi(`${endpointResource.PRODUCTS}/${idProduct}`, 'GET')
            .then(res => {
                dispatch(getProduct(res.data))
            })
    }
}
export const getProduct = product => {
    return {
        type: types.GET_PRODUCT,
        product
    }
}