import {FETCH_JOBS, REMOVE_JOB, UPDATE_TASK} from '../actions'

const initialState = []

export default function jobReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_JOBS:
            return action.jobs
        case REMOVE_JOB:
            return state.filter(job => job.id != action.id)
        case UPDATE_TASK:
            return state.map(t => t.id == action.id ? {...t, name: action.name} : t)
        default:
            return state
    }
}