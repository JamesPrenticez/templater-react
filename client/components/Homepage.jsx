import React from 'react'

export default class Homepage extends React.Component {
render(){
    const {job, dispatch} = this.props

        return(
            <>
                <div class="jobContainer">
                <h1>Welcome to the Jennian Homes internal jobs database</h1>
                <p>You can view all current jobs</p>
                <p>Add a Job</p>
                <p>Delete a Job</p>
                <p>Select Products for a Job</p>
                <p>Generate a Scope of Works</p>
                </div>
            </>
        )
    }
}