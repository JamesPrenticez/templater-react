import {SET_PRODUCTS_ENVELOPE} from '../actions'

export default function(state = [], action) {
    switch (action.type) {
        case SET_PRODUCTS_ENVELOPE:
            return action.products
            
        default:
            return state
    }
}