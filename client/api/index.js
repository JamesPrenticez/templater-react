import request from 'superagent'

export function getJobs () {
    return request
    .get('/api/jobs')
    .then(res => res.body.jobs)
}

export function addJob(jobName){
    return request.post('/api/jobs')
        .send({jobName})
        .then(res => res.body.id)
}