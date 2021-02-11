import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link, useParams, Redirect } from "react-router-dom";
import { FaEdit, FaSearchPlus, FaRegFileAlt, FaArrowLeft, FaTrashAlt, } from 'react-icons/fa'

import moment from 'moment'

import JobEdit from './JobEdit'

import { removeJob } from '../actions'
import { deleteJob } from '../api'

class JobView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            toJobList: false
        }
        this.showEditForm = this.showEditForm.bind(this)
        this.hideEditForm = this.hideEditForm.bind(this)
        this.redirectToJobList = this.redirectToJobList.bind(this)
        this.deleteJob = this.deleteJob.bind(this)
    }

    redirectToJobList = () => {
        this.setState(() => ({
            toJobList: true
        }))
    }

    showEditForm = () => {
        this.setState({
            editing: true,
        })
    }

    hideEditForm = () => {
        this.setState({
            editing: false,
        })
    }

    deleteJob = () => {
        const { jobs } = this.props
        const { id } = this.props.match.params

        if (confirm("Are you sure you want to delete " + `${jobs[id].jobName}` + "?")) {
            deleteJob(id)
                .then(() => {
                    this.props.dispatch(removeJob(id))
                })
        }
    }

    render() {
        const editStyle = { color: 'orange', height: '50px', width: '50px', marginLeft: '7px', cursor: 'pointer' }
        const selectionsStyle = { color: 'green', height: '50px', width: '50px', marginLeft: '7px', cursor: 'pointer' }
        const salesDocStyle = { color: 'blue', height: '50px', width: '50px', marginLeft: '7px', cursor: 'pointer' }
        const backStyle = { color: 'purple', height: '50px', width: '50px', marginLeft: '7px', cursor: 'pointer' }
        const deleteStyle = { color: 'red', height: '50px', width: '50px', marginLeft: '7px', cursor: 'pointer' }

        const { jobs } = this.props
        const { id } = this.props.match.params

        if (this.state.toJobList === true) {
            return <Redirect to={'/job_list/'} />
        }

        return (
            <>
                <div className="jobContainer">
                    <fieldset>
                        <legend><h1>View Job</h1></legend>

                        {this.state.editing ?
                            <>
                                <FaArrowLeft style={backStyle} onClick={this.hideEditForm} />
                                <JobEdit {...this.props.match.params}{...this.props} onEscape={this.hideEditForm} />
                            </> :

                            <>
                                {/* Back To JobList */}
                                <FaArrowLeft style={backStyle} onClick={this.redirectToJobList} />
                                <div className='jobDetailButtons'>
                                    {/* Edit Job Info */}
                                    <FaEdit style={editStyle} onClick={this.showEditForm} role='button' />
                                    {/* Selections */}
                                    <Link to={`/job_selections/${jobs[id].jobName}`}>
                                        <FaSearchPlus style={selectionsStyle} />
                                    </Link>
                                    {/* Sales Document */}
                                    <Link to={`/sales_doc/${jobs[id].jobName}`}>
                                        <FaRegFileAlt style={salesDocStyle} />
                                    </Link>
                                    {/* Delete Button */}
                                    <FaTrashAlt style={deleteStyle} onClick={this.deleteJob} role='button' />
                                </div>
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
                        }
                    </fieldset>
                </div>
            </>
        )
    }
}

export default connect()(JobView)
