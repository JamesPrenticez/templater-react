import React from 'react'
import { connect } from 'react-redux'

import {fetchJobs} from '../actions'
import {getJobs} from '../api'

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
                    <th>Name</th>
                    <th>Number</th>
                    <th>Collection</th>
                    <th>GFA</th>
                    <th>DELETE</th>
                </tr>
                </thead>
                <tbody>
                    
                {this.props.jobs.map(job => <tr key={job.id}><JobListItem job={job}/></tr>)}
                
                </tbody>
            </table>

            <div>
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