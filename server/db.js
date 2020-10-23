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
function createJob({jobName}, db = database){
    return db('jobs').insert({jobName})
}

// DELETE Job
function deleteJob(id, db = database){
    if(!id) return Promise.reject('Id must be specified')
    return db('jobs').where({id}).delete()
}