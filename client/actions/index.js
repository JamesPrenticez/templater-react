export const FETCH_JOBS = 'FETCH_JOBS'
export const ADD_JOB = 'ADD_JOB'

export function fetchJobs(jobs){
    return {
        type: FETCH_JOBS,
        jobs
    }
}