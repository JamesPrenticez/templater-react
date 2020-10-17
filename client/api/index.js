import request from 'superagent'

export function getJobs () {
    return request
    .get('/api/jobs')
    .then(res => res.body.jobs)
}