import request from 'supertest'
import server from '../server'

import {getJobs, createJob} from '../db'

jest.mock('../db', () => ({
    getJobs: jest.fn(),
    createJob: jest.fn()
}))

describe("GET /api/jobs", () => {
    test("returns jobs when successful", () =>{
        getJobs.mockImplementation(() => Promise.resolve([
            {id: 1, name: 'Beef Kebabs'}
        ]))
        return request(server)
            .get('/api/jobs')
            .then(res => {
                expect(res.status).toBe(200)
                expect(res.body.jobs.length).toBe(1)
            })
    })
    test("retruns 500 if database function blows up", () =>{
        getJobs.mockImplementation(() => Promise.reject('error message'))
            return request(server)
                .get('/api/jobs')
                .then(res => {
                    expect(res.status).toBe(500)
                    expect(res.text).toMatch(/something went wrong/)
                })
    })
})

describe("POST /api/jobs", () => {
    test("add job to database", () => {
        createJob.mockImplementation(() => Promise.resolve[0])
        return request(server)
            .post('/api/jobs')
            .send({jobName: 'NewJob'})
            .then(res => {
                expect(createJob).toHaveBeenCalled()
                expect(createJob.mock.calls[0][0].jobName).toBe('NewJob')
                
                expect(res.status).toBe(201)
                expect(res.body.id).toBe(0)
            })
        })
})
