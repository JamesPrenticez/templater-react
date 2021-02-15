import React from 'react'
import {connect} from 'react-redux'

class SalesDocCoverpage extends React.Component {
constructor(props){
    super(props)
}

render(){
       const { id } = this.props.match.params
        const { jobs } = this.props

        let array = jobs 
        let idYourLookingFor = id
        let i = array.findIndex(obj => obj.id == idYourLookingFor)

        return(
            <>
            <div className="coverPage">
				<div id="logo" src='#' style={{ backgroundImage: `url("../img/logo/logo.png")`}}></div>
				<div id="house" src='#' style={{ backgroundImage: `url(${jobs[i].imageCover})`}}></div>
				<h1 id="title">{jobs[i].jobName}</h1>
            </div>
            </>
        )
    }
}

export default connect()(SalesDocCoverpage)