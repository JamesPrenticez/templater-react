import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class JobsList extends React.Component {
    render(){
        return (
        <>
        <h1>Job List</h1>
        <p>A list of all current jobs displayed here.</p>

        <div>
            <ul>
                <li>Job 1</li>
                <li>Job 2</li>
                <li>Job 3</li>
            </ul>
        </div>

        <div>
            <Link to={`/add`}>
                <button>Create Job</button>
            </Link>
        </div>
        </>
        )
    }
}

export default connect ()(JobsList)