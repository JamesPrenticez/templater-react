import {FETCH_JOBS, REMOVE_JOB} from '../actions'

const initialState = []

export default function jobReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_JOBS:
            return action.jobs
        case REMOVE_JOB:
            return state.filter(job => job.id != action.id)
        default:
            return state
    }
}