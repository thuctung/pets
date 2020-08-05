import * as types from '../constants/ActionTypes'

const initialState = [

]
const products = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCT:
            return action.products

        case types.ADD_PRODUCT:
            state.push(action.product)
            return [...state]

        case types.DELETE_PRODUCT:
            const { idProduct } = action
            return state.filter(product => product.id !== idProduct)

        case types.UPDATE_PRODUCT:
            const product = action.product
            const indexUpdate = findIdIndex(state, product.id)
            if (indexUpdate !== -1) {
                state[indexUpdate] = product
            }
            return [...state]

        default: return state
    }
}

const findIdIndex = (arr, id) => {
    let index = -1 // item empty in array
    index = arr.findIndex(item => item.id === id)
    return index
}
export default products
