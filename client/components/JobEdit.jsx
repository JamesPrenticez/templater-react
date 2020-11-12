import React from 'react'
import {connect} from 'react-redux'


class JobEdit extends React.Component {
render(){
    console.log(this.props)
        return(
            <>
            <div className="jobContainer">
            <h2>Job Details</h2>
            {/* {this.props.match.params.jobName}
            
            
            {this.props.job[0]?.jobName} */}
            
            
            </div>

            </>
        )
    }
}

export default connect()(JobEdit)
