import React from 'react'

import Header from './Header'
import Footer from './Footer'

export default class Coverpage extends React.Component {
render(){
    const {job, dispatch} = this.props

        return(
            <>
            <div className="pageHeader"></div>
            <div className="coverPage">
				<img id="logo" src="./img/logo.png"></img>
				<img id="house" src="./img/houses/jamesarchitectural.png"></img>
				<p id="jobNameDisplay">Job Name</p>
            </div>
            <div className="pageFooter"></div>
            </>
        )
    }
}