import request from 'superagent'

// ------------------------------------------------------------ JOBS ------------------------------------------------------------
//GET Jobs
export function getJobs() {
    return request
    .get('/api/v1/jobs')
    .then(res => res.body.jobs)
}

//ADD Job
export function addJob(jobName, clientName){
    return request.post('/api/v1/jobs')
        .send({jobName, clientName})
        .then(res => res.body.id)
}

//Delete Job
export function deleteJob(id){
    return request.delete('/api/v1/jobs/' + id)
    .then(res => res.body)
}

//Edit Job
export function editJob(id, jobName, clientName, siteAddress, collection, lotNumber, jobNumber, houseType, gfa, salesPerson, imageCover, deposit, retailPrice, contractPrice) {
    console.log( jobName, clientName)
    return request.patch('/api/v1/jobs/' + id)
        .send({jobName, clientName, siteAddress, collection, lotNumber, jobNumber, houseType, gfa, salesPerson, imageCover, deposit, retailPrice, contractPrice})
        .then(res => res.body)
}

// ------------------------------------------------------------ PRODUCTS ------------------------------------------------------------
//GET Products
export function getProductsEnvelope() {
    return request
    .get('/api/v1/products/envelope')
    .then(res => res.body.products)
}

// ------------------------------------------------------------ SELECTIONS ------------------------------------------------------------//GET Products
export function getSelectionsPreliminary() {
    return request
    .get('/api/v1/selections/preliminary')
    .then(res => res.body.selectionsPreliminary)
}

export function getSelectionsEnvelope() {
    return request
    .get('/api/v1/selections/envelope')
    .then(res => res.body.selectionsEnvelope)
}