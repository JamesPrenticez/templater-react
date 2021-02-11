import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { FaEdit, FaSearchPlus, FaRegFileAlt, FaArrowLeft } from 'react-icons/fa'

import moment from 'moment'

import JobEdit from './JobEdit'

class JobView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
        }
        this.showEditForm = this.showEditForm.bind(this)
        this.hideEditForm = this.hideEditForm.bind(this)
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

    render() {
        const editStyle = { color: 'purple', height: '50px', width: '50px', marginLeft: '7px', cursor: 'pointer' }
        const selectionsStyle = { color: 'purple', height: '50px', width: '50px', marginLeft: '7px', cursor: 'pointer' }
        const salesDocStyle = { color: 'purple', height: '50px', width: '50px', marginLeft: '7px', cursor: 'pointer' }
        const backStyle = { color: 'purple', height: '50px', width: '50px', marginLeft: '7px', cursor: 'pointer' }
        const { jobs } = this.props
        const { id } = this.props.match.params
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
                                </div>
                                <div className="jobDetails">
                                        <img className='jobDetailsImg' style={{ backgroundImage: `url(${jobs[id].imageCover})` }}></img>
                                    
                                    <div className="grid">

                                        <h4>Job Name</h4>
                                        <p>{jobs[id].jobName}</p>

                                        <h4>Date Created</h4>
                                        <p>{moment.unix(jobs[id].dateCreated/1000).format('MMM YY')}</p>

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
