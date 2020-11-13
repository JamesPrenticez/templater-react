import request from 'superagent'

//GET Jobs
export function getJobs () {
    return request
    .get('/api/jobs')
    .then(res => res.body.jobs)
}

//ADD Job
export function addJob(jobName, clientName){
    return request.post('/api/add')
        .send({jobName, clientName})
        .then(res => res.body.id)
}

//Delete Job
export function deleteJob(id){
    return request.delete('/api/jobs/' + id)
    .then(res => res.body)
}