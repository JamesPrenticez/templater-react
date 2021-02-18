import {SET_SELECTIONS_PRELIMINARY, SET_SELECTIONS_ENVELOPE} from '../actions'

export default function(state = [], action) {
    switch (action.type) {
        case SET_SELECTIONS_PRELIMINARY:
            return action.selections

        case SET_SELECTIONS_ENVELOPE:
            return action.selections
            
        default:
            return state
    }
}