export const CHANGE_PAGE = 'CHANGE_PAGE'
export const FETCH_JOBS = 'FETCH_JOBS'
export const ADD_JOB = 'ADD_JOB'
export const REMOVE_JOB = 'REMOVE_JOB'

export function changePage(page) {
    return {
        type: CHANGE_PAGE,
        page
    }
}

export function fetchJobs(jobs){
    return {
        type: FETCH_JOBS,
        jobs
    }
}

export function removeJob(id){
    return ({
        type: REMOVE_JOB,
        id
    })
}