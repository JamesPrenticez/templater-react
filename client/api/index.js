import request from 'superagent'

//GET Jobs
export function getJobs () {
    return request
    .get('/api/v1/get')
    .then(res => res.body.jobs)
}

//ADD Job
export function addJob(jobName, clientName){
    return request.post('/api/v1/add')
        .send({jobName, clientName})
        .then(res => res.body.id)
}

//Delete Job
export function deleteJob(id){
    return request.delete('/api/v1/delete/' + id)
    .then(res => res.body)
}

//Edit Job
export function editJob(id, name) {
    return request.patch('/api/v1/edit/' + id)
        .send({name})
        .then(res => res.body)
}