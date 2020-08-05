import * as types from '../constants/ActionTypes'
import callAPi from '../utils/apiCaller'
import * as endpointResource from '../constants/EndPointResource'


export const actionGetAnimalRequest = () => {
    return dispatch => {
        return callAPi(endpointResource.Animal, 'GET')
            .then(res => dispatch(getAnimal(res.data)))
    }
}

export const getAnimal = animals => {
    return {
        type: types.GET_ANIMAL,
        animals
    }
}