import React from 'react'
import JobListItem from './JobListItem'

import {render, screen, waitFor} from '@testing-library/react'
import {Provider} from 'react-redux'

import {getJobs} from '../api'
import { SET_JOBS } from '../actions'
import store from '../store'

jest.mock('../api', () => ({
    getJobs: jest.fn()
}))

jest.spyOn(store, 'getState')
jest.spyOn(store, 'dispatch')

let jobs = [
    {id: 1, jobName: 'Job One'},
    {id: 2, jobName: 'Job Two'},
    {id: 3, jobName: 'Job Three'}
]

beforeEach(() => {
    store.getState.mockImplementation(() => ({jobs}))
    getJobs.mockImplementation(() => Promise.resolve(jobs))
})

afterEach(jest.resetAllMocks)

test('displays a list of jobs', () => {
    render(<Provider store={store}><JobListItem/></Provider>)
    let jobs = screen.getAllByRole('tr')
    expect(jobs.length).toBe(3)
    expect(jobs[2].innerHTML).toMatch(/publish/)
})

test('get jobs from api when component mounts', async () => {
    render(<Provider><JobListItem/></Provider>)
    await waitFor(() => store.dispatch.mock.calls.length == 1)
    expect(store.dispatch).toHaveBeenCalled()
    expect(store.dispatch.mock.calls[0][0].type).toBe(SET_JOBS)
})

test('console.log error from api client', async () => {
    jest.spyOn(console, 'log').mockImplementation(() => {})

    getJobs.mockImplementation(() => Promise.reject('internal server error'))
    render(<Provider store={store}><JobListItem/></Provider>)
    await waitFor(() => getJobs.mock.calls.length == 1)
    expect(console.log).toHaveBeenCalledWith('inernal server error')

    console.log.mockReset()
})