import * as types from '../constants/ActionTypes'

export const addToCart = product => {
    return {
        type: types.ADD_TO_CART,
        product
    }
}

export const deleteItemCart = idProduct => {
    return {
        type: types.DELETE_ITEM_CART,
        idProduct
    }
}

export const updateNumItem = (idProduct, count) => {
    return {
        type: types.UPDATE_NUMBER_ITEM,
        idProduct,
        count
    }
}