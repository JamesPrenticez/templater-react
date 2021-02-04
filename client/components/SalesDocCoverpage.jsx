import React from 'react'

import Header from './Header'
import Footer from './Footer'

export default class SalesDocCoverpage extends React.Component {
render(){
        return(
            <>
            <div className="pageHeader"></div>
            <div className="coverPage">
				<img id="logo" style={{ backgroundImage: `url("../img/logo.png")`}}></img>
				<img id="house" style={{ backgroundImage: `url(${this.props.jobs[0].image_cover})`}}></img>
				<p id="jobNameDisplay">{this.props.jobs[0].jobName}</p>
            </div>
            <div className="pageFooter">
            <p>Page 1/10</p>  
            </div>
            </>
        )
    }
}