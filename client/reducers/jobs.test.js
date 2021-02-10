import { test } from '../../knexfile'
import {setJobs, removeJob, updateJob} from '../actions'
import jobsReducer from './jobs'

//Initial State is empty
test('initial state is an empty array', () => {
    let state = jobsReducer(undefined, {})
    expect(state.length).toBe(0)
})

//SET Jobs
test('SET_JOBS action sets the jobs in state', () => {
    let jobs = {jobName: 'Test Job'}
    let action = setJobs(jobs)
    let newState = taskReducer([], action)
    expect(newState).toEqual(jobs)
})

//REMOVE
test('REMOVE_JOB action removes a job from the state', () => {
    let jobs = [{jobName: 'Dummy Job', id: 4}]
    let action = removeJob(4)
    let newState = jobsReducer(tesks, action)
    expect(newState).toEqual([])
})

//UPDATE
describe('UPDATE_JOB', () => {
    test('UPDATE_JOB action updates the state', () => {
        let jobs = [{jobName: 'Crazy Job', id: 5}]
        let action = updateJob(5, 'Lazy Job')
        let newState = jobsReducer(jobs, action)
        expect(newState[0],jobName).toEqual('Lazy Job')
    })

    test('does not update other tasks', () => {
        let jobs = [{jobName: 'Dummy Job', id: 4}]
        let action = updateJob(5, "Crazy Job")
        let newState = jobsReducer(jobs, action)
        expect(newState[0].jobName).toEqual('Dummy Job')
    })
})