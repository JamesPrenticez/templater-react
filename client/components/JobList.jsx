import React from 'react'
import { Link } from 'react-router-dom'
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
        <h1>Job List</h1>
        <p>A list of all current jobs displayed here.</p>

        <div>
            <ul>
                {this.props.jobs.map(job => <div className="card" key={job.id}><JobListItem job={job}/></div>)}
            </ul>
        </div>

        <div>
            <Link to={`/add`}>
                <button>Create Job</button>
            </Link>
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