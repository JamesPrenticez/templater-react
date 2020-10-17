import {FETCH_JOBS} from '../actions'

const initialState = []

export default function jobReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_JOBS:
            return action.jobs
        default:
            return state
    }
}