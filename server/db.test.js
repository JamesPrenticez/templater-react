const knex = require('knex')
const { test } = require('../knexfile')
const config = require('../knexfile')

const {getJobs, createJob, updateJob} = require('./db')
let testDb = knex(config.test)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

//GET
describe('Test getJobs function', () => {
    test('Check function return correct number of jobs', () => {
        getJobs(testDb)
           .then((result) => {
                expect(result.length).toBe(3)
            })
    })
})

//POST
describe('Test createJob function', () => {
    test('create a new job', () => {
        createJob({jobName: 'new job'}, testDb)
        .then(ids => {
            expect(ids[0] > 0).toBe(true)
            return getJobs(testDb)
        })
        .then(tasks => {
            expect(tasks.length).toBe(4)
            expect(tasks[3].jobName).toBe('new job')
        })
    })
})

//DELETE
describe('delete job', () => {
    test('deletes a job', ()=>{
        expect.assertions(2)
        return deleteJob(2, db)
            .then(recordsDeleted =>{
                expect(recordsDeleted).toBe(1)
                return getJobs(db)
            })
            .then(jobs => {
                expect(jobs.length).toBe(2)
            })
    })

    test('id of undefined doesnt break anything', () => {
        expect.assertions(2)
        return deleteJob(undefined, db)
            .catch(errorMessage => {
                expect(errorMessage).toBe('id must be specified')
                return getJobs(db)
            })
            .then(jobs => {
                expect(jobs.length.toBe(3))
            })
    })

})

//PATCH
describe('updateJob', () => {
    test('updates a jobName', () => {
        expect.assertions(2)
        return updateJob(1, 'SuperAndrew', db)
        .then((recordsUpdated) => {
            expect(recordsUpdated).toBe(1)
            return db('jobs').where({id: 1}).select().first()
        })
        .then(job => {
            expect(job.jobName).toBe('SuperAndrew')
        })
    })
})