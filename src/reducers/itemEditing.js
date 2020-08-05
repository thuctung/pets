import * as types from '../constants/ActionTypes'

const initialState = {}

const itemEditing = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCT:
            return action.product
        default:
            return state
    }
}

export default itemEditing