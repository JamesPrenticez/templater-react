import {combineReducers} from 'redux'

import jobs from './jobs'
import currentPage from './currentPage'

export default combineReducers({
    jobs,
    currentPage
})