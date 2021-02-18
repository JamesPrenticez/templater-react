import {combineReducers} from 'redux'

import jobs from './jobs'
import products from './products'
import selections from './selections'
import currentPage from './currentPage'
import currentForm from './currentForm'

export default combineReducers({
    jobs,
    products,
    selections,
    currentPage,
    currentForm
})