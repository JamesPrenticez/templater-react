import React from 'react'

import Header from './Header'

export default class Homepage extends React.Component {
render(){
    const {job, dispatch} = this.props

        return(
            <>
                <Header />
                <div className="jobContainer">
                    <h1>Welcome</h1>
                        <ul>
                            <li>You can view all current jobs</li>
                            <li>Add a Job</li>
                            <li>Delete a Job</li>
                            <li>Select Products for a Job</li>
                            <li>Generate a Scope of Works</li>
                        </ul>
                </div>
            </>
        )
    }
}