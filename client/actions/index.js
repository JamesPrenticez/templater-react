export const FETCH_JOBS = 'FETCH_JOBS'
export const ADD_JOB = 'ADD_JOB'
export const REMOVE_JOB = 'REMOVE_JOB'

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