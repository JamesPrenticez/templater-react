export const FETCH_JOBS = 'FETCH_JOBS'

export function fetchJobs (jobs){
    return {
        type: FETCH_JOBS,
        jobs
    }
}