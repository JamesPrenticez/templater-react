const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)

module.exports = {
    getJobs,
    createJob
}

function getJobs(db = database){
    return db('jobs')
}

function createJob({jobName}, db = database){
    return db('jobs').insert({jobName})
}