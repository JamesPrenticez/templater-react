import React from 'react'
import { connect } from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

class JobView extends React.Component {
    render() {
        console.log(this.props)
        const { jobName } = this.props.match.params

        return (
            <>

                <div className="jobContainer">
                        <div className="formHeader">
                            <h4>Job Details</h4>
                        </div>



                        <div className="jobDetails">
                            <div className="grid">
                                <h4>Date Created</h4>
                                <p>{this.props.jobs[0].jobName}</p>

                                <h4>Job Name</h4>
                                <p>{this.props.jobs[0].jobName}</p>

                                <h4>Client Name</h4>
                                <p>{this.props.jobs[0].clientName}</p>

                                <h4>Site Address</h4>
                                <p>{this.props.jobs[0].siteAddress}</p>

                                <h4>Suburb</h4>
                                <p>{this.props.jobs[0].collection}</p>

                                <h4>Lot Number</h4>
                                <p>{this.props.jobs[0].lotNumber}</p>

                                <h4>Job Number</h4>
                                <p>{this.props.jobs[0].jobNumber}</p>

                                <h4>Sales Person</h4>
                                <p>{this.props.jobs[0].salesPerson}</p>

                                <h4>GFA</h4>
                                <p>{this.props.jobs[0].salesPerson}</p>
                            </div>

                            <img className='floatRight' style={{ backgroundImage: `url(${this.props.jobs[0].image_cover})` }}></img>
                        
                        <div>
                        <Link to={`/job_selections/${this.props.jobs[0].jobName}`}>Selections</Link>
                        <Link to={`/sales_doc/${this.props.jobs[0].jobName}`}>Sales Doc</Link>
                        </div>
                        </div>


                </div>
            </>
        )
    }
}

export default connect()(JobView)
