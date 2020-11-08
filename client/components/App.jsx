import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

import Header from './Header'
import Footer from './Footer'
import Homepage from './Homepage'
import Nav from './Nav'
import Sidebar from './Sidebar'

import JobList from './JobList'
import ImageViewer from './ImageViewer'
import JobDetails from './JobDetails'
import JobContract from './JobContract'
import Products from './Products'

import {fetchJobs} from '../actions'
import {getJobs} from '../api'

class App extends React.Component{
    componentDidMount() {
        getJobs()
        .then(jobs => {
            this.props.dispatch(fetchJobs(jobs))
        })
        .catch(err => {
            console.log(err)
      })
    }

render(){
console.log(this.props)
let id = 1 //useParams()
  return (
<>
<Header/>
<Sidebar/>
<Router>
  <main>
  <Nav/>
<Switch>
<Route path="/" component={Homepage}/> 
<Route path="/a" component={JobDetails}/> 
<Route path="/b" component={JobContract}/> 
<Route path="/c" component={ImageViewer}/> 
</Switch>
  </main>
</Router>
<Footer/>
</>


  )
}
}

function mapStateToProps (state) {
    return {
        jobs: state.jobs
    }
}

export default connect(mapStateToProps)(App)
