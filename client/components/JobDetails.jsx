import React from 'react'
import { connect } from 'react-redux'

import moment from 'moment'

class JobDetails extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const { jobs } = this.props
        const { id } = this.props.match.params

        return (
                <>
                <div className="jobDetails">
                <img className='jobDetailsImg' style={{ backgroundImage: `url(${jobs[id].imageCover})` }}></img>

                <div className="grid">

                    <h4>Job Name</h4>
                    <p>{jobs[id].jobName}</p>

                    <h4>Date Created</h4>
                    <p>{moment.unix(jobs[id].dateCreated / 1000).format('MMM YY')}</p>

                    <h4>Client Name</h4>
                    <p>{jobs[id].clientName}</p>

                    <h4>Site Address</h4>
                    <p>{jobs[id].siteAddress}</p>

                    <h4>Collection</h4>
                    <p>{jobs[id].collection}</p>

                    <h4>Lot Number</h4>
                    <p>{jobs[id].lotNumber}</p>

                    <h4>Job Number</h4>
                    <p>{jobs[id].jobNumber}</p>

                    <h4>GFA</h4>
                    <p>{jobs[id].gfa}</p>

                    <h4>Cost</h4>
                    <p>{jobs[id].cost}</p>

                    <h4>Sales Person</h4>
                    <p>{jobs[id].salesPerson}</p>
                </div>
            </div>
                </>
        )
    }
}

export default connect()(JobDetails)

