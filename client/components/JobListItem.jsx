import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

import {FaMinusCircle, FaEdit} from 'react-icons/fa'

import {removeJob} from '../actions'
import {deleteJob} from '../api'

class JobListItem extends React.Component {
    deleteJob = () => {
        let {id} = this.props.job
        confirm("Are you sure you want to delete " + `${this.props.job.name}` + "?")
        deleteJob(id)
        .then (() => {
            this.props.dispatch(removeJob(id))
        })
    }

    render(){
    const {job} = this.props
     const deleteStyle = {color: 'red', marginLeft: '7px', cursor: 'pointer'}
        return(
            <>
            <tr>
                <td>
                    <Link to={`/job_view/${job.id}`}>{job.jobName}</Link>
                </td>
                <td>
                    {job.jobNumber}
                </td>
                <td>
                    {job.collection}
                </td>
                <td>
                    {job.gfa}          
                </td>
                <td>
                    {job.date_created}
                </td>
                <td name="delete">
                    <FaMinusCircle style={deleteStyle} onClick={this.deleteJob} role='button'/>
                </td>   
            </tr>  
            </>
        )
    }
}

export default connect()(JobListItem)