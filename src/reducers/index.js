import { combineReducers } from 'redux'
import products from './products'
import itemEditing from './itemEditing'
import animals from './animals'
import cart from './cart'
const root = combineReducers({
    products,
    itemEditing,
    animals,
    cart
})
export default root