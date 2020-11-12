import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Link, NavLink, useParams} from "react-router-dom";

import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

import Homepage from './Homepage'
import StandardRange from './StandardRange'

import JobList from './JobList'
import JobAdd from './JobAdd'
import JobEdit from './JobEdit'
import JobSums from './JobSums'
import JobSelections from './JobSelections'
import JobContract from './JobContract'

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
  <Header/>
  <Router>
    <main>
      <nav>
          <NavLink to="/home">Homepage</NavLink>
          <NavLink to="/job_list">List</NavLink>
          <NavLink to="/job_add">Add</NavLink>
          <NavLink to="/job_selections">Selections</NavLink>
          <NavLink to="/job_scope_of_works">Scope Of Works</NavLink>
      </nav>
    
    <div class="container">
    <Route path="/home" component={Homepage}/>
    <Route path="/job_list" component={JobList}/>
    <Route path="/job_add" component={JobAdd}/>
    <Route path="/job_edit/:jobName" render={() => <JobEdit {...this.props}{...this.matchProps}/>} /> 
    <Route path="/job_sums" component={JobSums}/>
    <Route path="/job_selections" component={JobSelections}/>
    <Route path="/job_scope_of_works" component={JobContract}/>

    </div>

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
