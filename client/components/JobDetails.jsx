import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import EditDetails from './EditDetails'

import {fetchJobs} from '../actions'
import {getJobs} from '../api'

class JobDetails extends React.Component {
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
    console.log(this.props)
    const id = `${this.props.id}`
    const image = `${this.props.jobs[id]?.img}`
        return(
            <>
            <div className='jobContainer'>
            <Link to={`/`}><h4>Home</h4></Link>

            <h2>Job Details</h2>
            <img height='200px' width='200px' margin='auto' src={image}></img>
            <h4>Date Created</h4>{this.props.jobs[id]?.date_created}
            <h4>Job Name</h4>{this.props.jobs[id]?.jobName}
            <h4>Collection</h4>{this.props.jobs[id]?.collection}
            <h4>Client</h4>{this.props.jobs[id]?.client}
            <h4>Job Number</h4>{this.props.jobs[id]?.jobNumber}
            <h4>Site Address</h4>{this.props.jobs[id]?.siteAddress}
            <h4>Lot Number</h4>{this.props.jobs[id]?.lotNumber}
            <h4>GFA</h4>{this.props.jobs[id]?.gfa}

            {/* <EditDetails/> */}

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

export default connect(mapStateToProps)(JobDetails)















