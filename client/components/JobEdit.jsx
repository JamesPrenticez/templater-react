import React from 'react'
import { connect } from 'react-redux'


class JobEdit extends React.Component {
render(){
    console.log(this.props.jobs)
        return(
            <>
            <h2>Job Details</h2>
            {this.props.match.params.jobName}
            {/* <img height='200px' width='200px' src={this.props.job.img}></img>
            <h4>Job ID</h4>{this.props.job.id}
            <h4>Date Created</h4>{this.props.job.date_created}
            <h4>Job Name</h4>{this.props.job.jobName}
            <h4>Collection</h4>{this.props.job.collection}
            <h4>Client</h4>{this.props.job.client}
            <h4>Job Number</h4>{this.props.job.jobNumber}
            <h4>Site Address</h4>{this.props.job.siteAddress}
            <h4>Lot Number</h4>{this.props.job.lotNumber}
            <h4>GFA</h4>{this.props.job.gfa}

            <p>Need to add these to database</p>
            <h4>Bedrooms</h4>{this.props.job.bedrooms}
            <h4>Bathrooms</h4>{this.props.job.bathrooms}
            <h4>Ensuite</h4>{this.props.job.ensuite}
            <h4>Water Closet</h4>{this.props.job.waterCloset} */}

            </>
        )
    }
}

export default connect()(JobEdit)
