import React from 'react'
import {Link} from 'react-router-dom'

import EditDetails from './EditDetails'

class JobDetails extends React.Component {

render(){
    console.log(this.props)
        return(
            <>
            <div className='jobContainer'>
            <Link to={`/`}><h4>Home</h4></Link>

            <h2>Job Details</h2>
            <img height='200px' width='200px' src={this.props.job.img}></img>
            <h4>Job ID</h4>{this.props.job.id}
            <h4>Date Created</h4>{this.props.job.date_created}
            <h4>Job Name</h4>{this.props.job.jobName}
            <h4>Collection</h4>{this.props.job.collection}
            <h4>Client</h4>{this.props.job.client}
            <h4>Job Number</h4>{this.props.job.jobNumber}
            <h4>Site Address</h4>{this.props.job.siteAddress}
            <h4>Lot Number</h4>{this.props.job.lotNumber}
            <h4>GFA</h4>{this.props.job.gfa}

            {/* <EditDetails/> */}

            </div>
            </>
        )
    }
}

export default JobDetails















