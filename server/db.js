const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)

module.exports = {
    getJobs,
    createJob,
    deleteJob,
    updateJob
}

// GET Jobs
function getJobs(db = database){
    return db('jobs')
}

// ADD Job
function createJob({jobName, clientName, siteAddress, collection, lotNumber, jobNumber, gfa, salesPerson, image_cover}, db = database){
    return db('jobs').insert({jobName, clientName, siteAddress, collection, lotNumber, jobNumber, gfa, salesPerson, image_cover})
}

// id: 0,
// date_created: new Date(Date.now()),
// jobName: 'Alexandra',
// clientName: 'John Doe',
// siteAddress: '01 Fake Street',
// collection: 'Southern Series',
// lotNumber: 'Lot 01',
// jobNumber: 'SS01',
// gfa: "170.69m2",
// salesPerson: 'Standard Pricing',
// image_cover: '../img/houses/alexandra/alexandra.png'

// DELETE Job
function deleteJob(id, db = database){
    if(!id) return Promise.reject('id must be specified')
    return db('jobs').where({id}).delete()
}

//UPDATE Task
function updateJob(id, jobName, db = database) {
    if (!id) return Promise.reject('id must be specified')
    return db('jobs').where({id}).update({jobName})
}