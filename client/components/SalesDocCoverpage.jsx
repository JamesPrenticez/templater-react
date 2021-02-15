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
				<img id="logo" style={{ backgroundImage: `url("../img/logo/logo.png")`}}></img>
				<img id="house" style={{ backgroundImage: `url(${jobs[i].imageCover})`}}></img>
				<h1 id="title">{jobs[i].jobName}</h1>
            </div>
            </>
        )
    }
}

export default connect()(SalesDocCoverpage)