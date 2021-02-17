import {combineReducers} from 'redux'

import jobs from './jobs'
import products from './products'
import currentPage from './currentPage'
import currentForm from './currentForm'

export default combineReducers({
    jobs,
    products,
    currentPage,
    currentForm
})