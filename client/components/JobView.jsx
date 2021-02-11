import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { FaEdit, FaSearchPlus, FaRegFileAlt, FaArrowLeft} from 'react-icons/fa'

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
        const editStyle = {color: 'purple', height: '50px', width: '50px', marginLeft: '7px', cursor: 'pointer' }
        const selectionsStyle = {color: 'purple', height: '50px', width: '50px', marginLeft: '7px', cursor: 'pointer' }
        const salesDocStyle = {color: 'purple', height: '50px', width: '50px', marginLeft: '7px', cursor: 'pointer' }
        const backStyle = {color: 'purple', height: '50px', width: '50px', marginLeft: '7px', cursor: 'pointer' }
        const { jobs } = this.props
        const { id } = this.props.match.params
        return (
            <>
                <div className="jobContainer">
                    <div className="formHeader">
                        <h4>Job Details</h4>
                    </div>
                    
                    {this.state.editing ? 
                    <>
                    <FaArrowLeft style={backStyle} onClick={this.hideEditForm}/>
                    <JobEdit {...this.props.match.params}{...this.props} onEscape={this.hideEditForm}/>
                    </> :

                    <>
                    <div>
                        {/* Edit Job Info */}
                        <FaEdit style={editStyle} onClick={this.showEditForm} role='button' />
                        {/* Selections */}
                        <Link to={`/job_selections/${jobs[id].jobName}`}>
                            <FaSearchPlus style={selectionsStyle}/>
                        </Link>
                        {/* Sales Document */}
                        <Link to={`/sales_doc/${jobs[id].jobName}`}>
                            <FaRegFileAlt style={salesDocStyle}/>
                        </Link>                      
                    </div>
                            <div className="jobDetails">
                                
                                <div className="grid">
                                    <h4>Date Created</h4>
                                    <p>{jobs[id].dateCreated}</p>

                                    <h4>Job Name</h4>
                                    <p>{jobs[id].jobName}</p>

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

                                    <h4>Sales Person</h4>
                                    <p>{jobs[id].salesPerson}</p>

                                    <h4>GFA</h4>
                                    <p>{jobs[id].gfa}</p>

                                    <h4>Cost</h4>
                                    <p>{jobs[id].cost}</p>
                                </div>

                                <img className='floatRight' style={{ backgroundImage: `url(${jobs[id].imageCover})` }}></img>

                            </div>
                        </>
                    }
                </div>
            </>
        )
    }
}

export default connect()(JobView)
