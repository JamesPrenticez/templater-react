import React from 'react'
import {Link} from 'react-router-dom'

export default class JobListItem extends React.Component {
render(){
    const {job, dispatch} = this.props

        return(
            <>
            <Link to={`/view`}>
                <h4>{job.jname}</h4>
            </Link>
            </>
        )
    }
}