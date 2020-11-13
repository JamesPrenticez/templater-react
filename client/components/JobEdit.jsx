import React from 'react'
import {connect} from 'react-redux'


class JobEdit extends React.Component {
render(){
    console.log(this.props)
            const {jobName} = this.props.match.params
            console.log(jobName)
        return(
            <>
            <div className="jobContainer">
            <h2>Job Details</h2><br />
            
            
            <h4>{this.props.jobs[jobName].jobName}</h4>
            
            
            </div>

            </>
        )
    }
}

export default connect()(JobEdit)
