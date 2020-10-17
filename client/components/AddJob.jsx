import React from 'react'
import {Link} from 'react-router-dom'

export default class JobListItem extends React.Component {
render(){
    const {job, dispatch} = this.props

        return(
            <>
            <Link to={`/`}>
                <h4>Home</h4>
            </Link>
            </>
        )
    }
}