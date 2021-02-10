export const SET_JOBS = 'FETCH_JOBS'
export const ADD_JOB = 'ADD_JOB'
export const REMOVE_JOB = 'REMOVE_JOB'
export const UPDATE_JOB = 'UPDATE_JOB'

export const CHANGE_PAGE = 'CHANGE_PAGE'

export function setJobs(jobs){
    return {
        type: SET_JOBS,
        jobs
    }
}

export function removeJob(id){
    return ({
        type: REMOVE_JOB,
        id
    })
}

export function updateJob(id, name) {
    return ({
        type: UPDATE_JOB,
        id, name
    })
}

export function changePage(page) {
    return {
        type: CHANGE_PAGE,
        page
    }
}