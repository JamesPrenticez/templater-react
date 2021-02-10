import request from 'supertest'
import server from '../server'

import {getJobs, createJob, deleteJob, updateJob} from '../db'

jest.mock('../db', () => ({
    getJobs: jest.fn(),
    createJob: jest.fn(),
    deleteJob: jest.fn(),
    updateJob: jest.fn()
}))

//GET
describe("GET /api/v1/get", () => {
    test("returns jobs when successful", () =>{
        getJobs.mockImplementation(() => Promise.resolve([
            {id: 1, name: 'Beef Kebabs'}
        ]))
        return request(server)
            .get('/api/v1/get')
            .then(res => {
                expect(res.status).toBe(200)
                expect(res.body.jobs.length).toBe(1)
            })
    })
    test("retruns 500 if database function blows up", () =>{
        getJobs.mockImplementation(() => Promise.reject('error message'))
            return request(server)
                .get('/api/v1/get')
                .then(res => {
                    expect(res.status).toBe(500)
                    expect(res.text).toMatch(/something went wrong/)
                })
    })
})

//POST 
describe("POST /api/v1/post", () => {
    test("add job to database", () => {
        createJob.mockImplementation(() => Promise.resolve[0])
        return request(server)
            .post('/api/v1/post')
            .send({jobName: 'NewJob'})
            .then(res => {
                expect(createJob).toHaveBeenCalled()
                expect(createJob.mock.calls[0][0].jobName).toBe('NewJob')
                
                expect(res.status).toBe(201)
                expect(res.body.id).toBe(0)
            })
        })
})

//DELETE
describe('DELETE /api/v1/delete/:id', () => {
    test("calls deleteJob database function", () => {
        deleteJob.mockImplementation(() => Promise.resolve(1))
        expect.assertions(2)
        return request(server)
        .delete('/api/jobs/1')
        .then(res => {
            expect(deleteJob).toHaveBeenCalledWith(1)
            expect(res.status).toBe(200)
        })
    })

})

//UPDATE
describe('PATCH /api/v1/edit/:id', () =>{
    test("calls updateJob database function", () =>{
        updateJob.mockImplementation(() => Promise.resolve(1))
        expect.assertions(2)
        return request(server)
            .patch('/api/v1/edit/1')
            .send({jobName: "Cookie Cutter"})
            .then(res => {
                expect(updateJob).toHaveBeenCalledWith(1, "Cookie Cutter")
                expect(res.status).toBe(200)
            })
    })
})
