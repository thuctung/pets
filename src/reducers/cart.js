import * as types from '../constants/ActionTypes'
const carts = localStorage.getItem('cart')
const initialState = carts ? JSON.parse(carts) : []

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            let findIndex = state.findIndex(item => {
                return item.product.id === action.product.id
            })
            if (findIndex > -1) {
                state[findIndex].count += 1
            } else {
                const itemCart = {
                    product: action.product,
                    count: 1
                }
                state.push(itemCart)
            }
            localStorage.setItem('cart', JSON.stringify([...state]))
            return [...state]
        case types.DELETE_ITEM_CART:
            let idProductDelete = action.idProduct
            state = state.filter(item => item.product.id !== idProductDelete)
            localStorage.setItem('cart', JSON.stringify([...state]))
            return [...state]
        case types.UPDATE_NUMBER_ITEM:
            let { idProduct, count } = action
            if (count > 0) {
                let indexItem = state.findIndex(item => item.product.id === idProduct)
                if (indexItem > -1) {
                    state[indexItem].count = count
                }
            }
            return [...state]
        default: return state
    }
}

export default cart