import request from 'supertest'
import server from '../server'

import {getJobs, createJobs} from '../db'


jest.mock('../db', () => ({
    getJobs: jest.fn(),
    createJobs: jest.fn()
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