import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link, useParams, useHistory, Redirect } from "react-router-dom";

import { FaMinusCircle, FaEdit } from 'react-icons/fa'

import { removeJob } from '../actions'
import { deleteJob } from '../api'

import moment from 'moment'

class JobListItem extends React.Component {
    state = {
        toJobView: false,
    }

    redirectToJobView = () => {
        this.setState(() => ({
            toJobView: true
        }))
    }

    deleteJob = () => {
        let { id } = this.props.job
        confirm("Are you sure you want to delete " + `${this.props.job.name}` + "?")
        deleteJob(id)
            .then(() => {
                this.props.dispatch(removeJob(id))
            })
    }

    render() {
        const { job } = this.props
        const deleteStyle = { color: 'red', marginLeft: '7px', cursor: 'pointer' }

        if (this.state.toJobView === true) {
            return <Redirect to={`/job_view/${job.id}`} />
        }

        return (
            <>

                <tr onClick={this.redirectToJobView}>
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
                        {moment.unix(job.dateCreated / 1000).format('MMM YY')}
                    </td>
                    <td name="delete">
                        <FaMinusCircle style={deleteStyle} onClick={this.deleteJob} role='button' />
                    </td>
                </tr>

            </>
        )
    }
}

export default connect()(JobListItem)