import {SET_JOBS, REMOVE_JOB, UPDATE_JOB} from '../actions'

export default function(state = [], action) {
    switch (action.type) {
        case SET_JOBS:
            return action.jobs

        case REMOVE_JOB:
            return state.filter(job => job.id != action.id)

        case UPDATE_JOB:
            return state.map(t => t.id == action.id ? {...t, jobName: action.jobName} : t)
            
        default:
            return state
    }
}