import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {FaMinusCircle} from 'react-icons/fa'

import {removeJob} from '../actions'
import {deleteJob} from '../api'

class JobListItem extends React.Component {
    state = {
        showControls: false
    }

    showControls = () => {
        this.setState({showControls: true})
    }

    hideControls = () => {
        this.setState({showControls: false})
    }

    deleteJob = () => {
        let {id} = this.props.job
        deleteJob(id)
        .then (() => {
            this.props.dispatch(removeJob(id))
        })

    }

    render(){
    const {job} = this.props
    const {showControls} = this.state
    const deleteStyle = {color: 'red', marginLeft: '7px', cursor: 'pointer'}
        return(
            <>
                <td>
                <Link to={`/view`}>
                    {job.jobName}
                </Link>
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
                
                <td
                onMouseEnter={this.showControls}
                onMouseLeave={this.hideControls}>

                {showControls ? <FaMinusCircle
                        style={deleteStyle}
                        onClick={this.deleteJob}
                        role='button'                
                /> : ''}
                </td>          
            </>
        )
    }
}

export default connect()(JobListItem)