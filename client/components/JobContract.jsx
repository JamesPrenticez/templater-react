import React from 'react'
import {Link} from 'react-router-dom'

import Nav from './Nav'

export default class JobContract extends React.Component {
render(){
    const {job, dispatch} = this.props

        return(
            <>
        <Nav></Nav>

        <Link to={`/`}>
            <h4>Home</h4>
        </Link>
      

            </>
        )
    }
}