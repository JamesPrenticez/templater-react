import {combineReducers} from 'redux'

import jobs from './jobs'
import currentPage from './currentPage'
import currentForm from './currentForm'

export default combineReducers({
    jobs,
    currentPage,
    currentForm
})