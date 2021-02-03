import {combineReducers} from 'redux'

import jobsReducer from './jobs'
import currentPageReducer from './currentPage'

export default combineReducers({
    jobs: jobsReducer,
    currentPage: currentPageReducer
})