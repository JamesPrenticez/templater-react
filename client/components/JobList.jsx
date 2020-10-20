import React from 'react'
import { Link } from 'react-router-dom'
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
                <tr>
                    <th>Job</th>
                    <th>Project</th>
                    <th>GFA</th>
                </tr>

                {this.props.jobs.map(job => <tr key={job.id} link={`/view`}><JobListItem job={job}/></tr>)}
                
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