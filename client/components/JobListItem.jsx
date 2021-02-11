import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Link, useParams, useHistory } from "react-router-dom";

import {FaMinusCircle, FaEdit} from 'react-icons/fa'

import {removeJob} from '../actions'
import {deleteJob} from '../api'

import moment from 'moment'

class JobListItem extends React.Component {
    
    deleteJob = () => {
        let {id} = this.props.job
        confirm("Are you sure you want to delete " + `${this.props.job.name}` + "?")
        deleteJob(id)
        .then (() => {
            this.props.dispatch(removeJob(id))
        })
    }
    
    handleClick = () =>{
        const history = useHistory();
        history.push(`/job_view/${job.id}`);
    }

    render(){
    const {job} = this.props
     const deleteStyle = {color: 'red', marginLeft: '7px', cursor: 'pointer'}
        return(
            <>
            
            <tr onClick={this.handleClick}>
                <td>
                    {job.jobName}
                </td>
                <td>
                    {job.jobNumber}
                </td>
                <td>
                    {job.collection}
                </td>
                <td>
                    {job.cost}          
                </td>
                <td>
                    {job.gfa}          
                </td>
                <td>
                    {moment.unix(job.dateCreated/1000).format('MMM YY')}
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