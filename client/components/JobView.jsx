import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { FaEdit, FaSearchPlus, FaRegFileAlt, FaArrowLeft} from 'react-icons/fa'
import JobEdit from './JobEdit'

class JobView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false
        }
        this.editJob = this.editJob.bind(this)
        this.hideEditForm = this.hideEditForm.bind(this)
    }

    editJob = () => {
        console.log("fire")
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
        return (
            <>
                <div className="jobContainer">
                    <div className="formHeader">
                        <h4>Job Details</h4>
                    </div>

                    <div>
                        {/* Edit Job Info */}
                        <FaEdit style={editStyle} onClick={this.editJob} role='button' />
                        {/* Selections */}
                        <Link to={`/job_selections/${jobs[0].jobName}`}>
                            <FaSearchPlus style={selectionsStyle}/>
                        </Link>
                        {/* Sales Document */}
                        <Link to={`/sales_doc/${jobs[0].jobName}`}>
                            <FaRegFileAlt style={salesDocStyle}/>
                        </Link>                      
                    </div>
                    
                    {this.state.editing ? 
                    <>
                    <JobEdit jobs={jobs} onEscape={this.hideEditForm}/>
                    <Link to={`/job_view/${this.props.jobs[0].jobName}`}><FaArrowLeft style={backStyle}/></Link>
                    </> :

                        <>
                            <div className="jobDetails">
                                
                                <div className="grid">
                                    <h4>Date Created</h4>
                                    <p>{jobs[0].dateCreated}</p>

                                    <h4>Job Name</h4>
                                    <p>{jobs[0].jobName}</p>

                                    <h4>Client Name</h4>
                                    <p>{jobs[0].clientName}</p>

                                    <h4>Site Address</h4>
                                    <p>{jobs[0].siteAddress}</p>

                                    <h4>Collection</h4>
                                    <p>{jobs[0].collection}</p>

                                    <h4>Lot Number</h4>
                                    <p>{jobs[0].lotNumber}</p>

                                    <h4>Job Number</h4>
                                    <p>{jobs[0].jobNumber}</p>

                                    <h4>Sales Person</h4>
                                    <p>{jobs[0].salesPerson}</p>

                                    <h4>GFA</h4>
                                    <p>{jobs[0].gfa}</p>

                                    <h4>Cost</h4>
                                    <p>{jobs[0].cost}</p>
                                </div>

                                <img className='floatRight' style={{ backgroundImage: `url(${this.props.jobs[0].imageCover})` }}></img>


                            </div>
                        </>
                    }



                </div>
            </>
        )
    }
}

export default connect()(JobView)
