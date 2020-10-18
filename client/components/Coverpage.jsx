import React from 'react'

import Header from './Header'
import Footer from './Footer'

export default class Coverpage extends React.Component {
render(){
    const {job, dispatch} = this.props

        return(
            <>
            <Header></Header>
            <div className="coverPage">
				<img id="logo" src="./img/logo.png"></img>
				<img id="house" src="./img/houses/jamesarchitectural.png"></img>
				<p id="jobNameDisplay">Job Name</p>
            </div>
            <Footer></Footer>
            </>
        )
    }
}