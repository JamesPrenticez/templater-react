import nock from 'nock'
import { test } from '../../knexfile'
import {getJobs, addJob, deleteJob, editJob} from './index'

//GET
test('GET jobs from server', () => {
    nock(/localhost/)
    .get('/api/v1/get')
    .reply(200, [{id: 1, jobName: 'Andrew'}])

    return getJobs()
        .then(jobs => {
            expect(jobs.length).ToBe(1)
            expect(jobs[1].jobName).toBe('Andrew')
        })
})

//POST
test('add a job to the server', () => {
    const scope = nock(/localhost/)
    .post('/api/v1/add')
    .reply(201)

    return addJob({jobName: 'Test Job'})
        .then(() => {
            expect(scope.isDone()).toBe(true)
        })
})

//DELETE
test('delete job', () => {
    const scope = nock(/localhost/)
        .delete('/api/v1/delete/1')
        .reply(200)

        return deleteJob(1)
            .then(() => {
                expect(scope.isDone()).toBe(true)
            })
})

//EDIT
test('edit job', () => {
    const scope = nock(/localhost/)
    .patch('/api/v1/edit/1', {jobName: 'New Name'})
    .reply(200)

    return editJob(1, 'New Name')
        .then(() => {
            expect(scope.isDone()).toBe(true)
        })
})

    