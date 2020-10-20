import React from 'react'
import {Link} from 'react-router-dom'

export default class JobListItem extends React.Component {
render(){
    const {job, dispatch} = this.props

        return(
            <>
            <td>
            <Link to={`/view`}>
                {job.jobName}
            </Link>
            </td>
            <td>
                {job.clientName}
            </td>
            <td>
                {job.gfa}          
            </td>
            </>
        )
    }
}