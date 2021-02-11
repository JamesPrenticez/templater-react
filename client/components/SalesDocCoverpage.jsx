import React from 'react'
import {connect} from 'react-redux'

class SalesDocCoverpage extends React.Component {
constructor(props){
    super(props)
}

render(){
console.log(this.props)
const {jobs} = this.props
const id = 0
        return(
            <>
            <div className="coverPage">
				<img id="logo" style={{ backgroundImage: `url("../img/logo.png")`}}></img>
				<img id="house" style={{ backgroundImage: `url(${jobs[id].imageCover})`}}></img>
				<h1 id="title">{this.props.jobs[id].jobName}</h1>
            </div>
            </>
        )
    }
}

export default connect()(SalesDocCoverpage)