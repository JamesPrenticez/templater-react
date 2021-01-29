const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)

module.exports = {
    getJobs,
    createJob,
    deleteJob,
}

// GET Jobs
function getJobs(db = database){
    return db('jobs')
}

// ADD Job
function createJob({jobName, clientName, siteAddress, collection, lotNumber, jobNumber, salesPerson, gfa}, db = database){
    return db('jobs').insert({jobName, clientName, siteAddress, collection, lotNumber, jobNumber, salesPerson, gfa})
}


// DELETE Job
function deleteJob(id, db = database){
    if(!id) return Promise.reject('Id must be specified')
    return db('jobs').where({id}).delete()
}