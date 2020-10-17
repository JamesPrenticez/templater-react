const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)

module.exports = {
    getJobs
}

function getJobs(db = database) {
    return db('jobs')
}