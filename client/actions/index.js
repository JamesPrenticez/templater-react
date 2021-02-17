export const SET_JOBS = 'SET_JOBS'
export const ADD_JOB = 'ADD_JOB'
export const REMOVE_JOB = 'REMOVE_JOB'
export const UPDATE_JOB = 'UPDATE_JOB'

export const SET_PRODUCTS = 'SET_PRODUCTS'

export const CHANGE_PAGE = 'CHANGE_PAGE'
export const CHANGE_FORM = 'CHANGE_FORM'


// ------------------------------------------------------------ JOBS ------------------------------------------------------------
export function setJobs(jobs){
    return {
        type: SET_JOBS,
        jobs
    }
}

export function removeJob(id){
    return ({
        type: REMOVE_JOB,
        id
    })
}

export function updateJob(id, jobName, clientName, siteAddress, collection, lotNumber, jobNumber, houseType, gfa, salesPerson, imageCover, deposit, retailPrice, contractPrice) {
    return ({
        type: UPDATE_JOB,
        id, jobName, clientName, siteAddress, collection, lotNumber, jobNumber, houseType, gfa, salesPerson, imageCover, deposit, retailPrice, contractPrice
    })
}

// ------------------------------------------------------------ PRODUCTS ------------------------------------------------------------

export function setProducts(products){
    return {
        type: SET_PRODUCTS,
        products
    }
}

// ------------------------------------------------------------ CHANGE PAGE & CHANGE FORM ------------------------------------------------------------

export function changePage(page) {
    return {
        type: CHANGE_PAGE,
        page
    }
}

export function changeForm(form) {
    return {
        type: CHANGE_FORM,
        form
    }
}