import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Link, NavLink, useParams} from "react-router-dom";

import Footer from './Footer'

import Homepage from './Homepage'
import StandardRange from './StandardRange'

import JobList from './JobList'
import JobAdd from './JobAdd'
import JobView from './JobView'
import JobSums from './JobSums'
import JobSelections from './JobSelections'
import PageScale from './PageScale'

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
  return (
<>
  <Router>
    <main>
      <nav>
        <NavLink to="/home">Homepage</NavLink>
        <NavLink to="/job_add">Add</NavLink>
        <NavLink to="/job_list">List</NavLink>
        <NavLink to="/job_selections">Selections</NavLink>
        <NavLink to="/job_scope_of_works">Sales Doc</NavLink>
      </nav>
    
      <Route path="/home" component={Homepage}/>
      <Route path="/job_add" component={JobAdd}/>
      <Route path="/job_list" component={JobList}/>
      <Route path="/job_view/:jobName" render={(matchProps) => <JobView {...matchProps}{...this.props}/>} /> 
      <Route path="/job_sums" component={JobSums}/>
      <Route path="/job_selections" component={JobSelections}/>
      <Route path="/job_scope_of_works" component={PageScale}/>


    </main>
</Router>
  <Footer/>

</>


  )
}
}

function mapStateToProps (state) {
  const {jobs} = state  
  return {
        jobs: state.jobs
    }
}

export default connect(mapStateToProps)(App)
