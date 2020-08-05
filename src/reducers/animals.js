import * as types from '../constants/ActionTypes'

const initialState = []

const animals = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ANIMAL:
            return action.animals
        default: return state
    }
}

export default animals