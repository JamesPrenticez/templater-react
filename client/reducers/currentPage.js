import {CHANGE_PAGE} from '../actions'

export default function currentPage (state='home', action) {
    switch (action.type) {
        case CHANGE_PAGE:
            return action.page
        default:
            return state
    }
}

 