import React from 'react'
import { connect } from 'react-redux'

import {fetchJobs} from '../actions'
import {getJobs} from '../api'

import AddJob from './AddJob'

import JobListItem from './JobListItem'

class JobsList extends React.Component {
    componentDidMount() {
        getJobs()
        .then(jobs => {
            this.props.dispatch(fetchJobs(jobs))
        })
        .catch(err => {
            console.log(err)
      })
    }

    render(){
        return (
        <>
        <div className='jobContainer'>
            <h1>Job List</h1>
            <p>A list of all current jobs displayed here.</p>

            <table id="jobs">
                <thead>
                <tr>
                    <th>Jobs</th>
                    <th>Address</th>
                    <th>Client</th>
                    <th>GFA</th>
                    <th>DELETE</th>
                </tr>
                </thead>
                <tbody>
                {this.props.jobs.map(job => <tr key={job.id}><JobListItem job={job}/></tr>)}
                </tbody>
            </table>

            <div>
                <AddJob/>
            </div>
        </div>
        </>
        )
    }
}

function mapStateToProps (state) {
    return {
        jobs: state.jobs
    }
}

export default connect (mapStateToProps)(JobsList)