import React from 'react'
import { connect } from 'react-redux'


class JobView extends React.Component {
    render() {
        console.log(this.props)
        const { jobName } = this.props.match.params
        console.log(jobName)

        return (
            <>

                <div className="jobContainer">
                        <div className="formHeader">
                            <h4>Job Details</h4>
                        </div>



                        <div className="jobDetails">
                            <div className="grid">
                                <h4>Date Created</h4>
                                <p>{this.props.jobs[jobName].jobName}</p>

                                <h4>Job Name</h4>
                                <p>{this.props.jobs[jobName].jobName}</p>

                                <h4>Client Name</h4>
                                <p>{this.props.jobs[jobName].clientName}</p>

                                <h4>Site Address</h4>
                                <p>{this.props.jobs[jobName].siteAddress}</p>

                                <h4>Suburb</h4>
                                <p>{this.props.jobs[jobName].collection}</p>

                                <h4>Lot Number</h4>
                                <p>{this.props.jobs[jobName].lotNumber}</p>

                                <h4>Job Number</h4>
                                <p>{this.props.jobs[jobName].jobNumber}</p>

                                <h4>Sales Person</h4>
                                <p>{this.props.jobs[jobName].salesPerson}</p>

                                <h4>GFA</h4>
                                <p>{this.props.jobs[jobName].salesPerson}</p>
                            </div>

                            <img className='floatRight' style={{ backgroundImage: `url(${this.props.jobs[jobName].image_cover})` }}></img>

                        </div>


                </div>
            </>
        )
    }
}

export default connect()(JobView)
