const knex = require('knex')
const config = require('../knexfile')

const {getJobs, createJob} = require('./db')
let testDb = knex(config.test)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

describe('Test getJobs function', () => {
    test('Check function return correct number of jobs', () => {
        getJobs(testDb)
           .then((result) => {
                expect(result.length).toBe(3)
            })
    })
})

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