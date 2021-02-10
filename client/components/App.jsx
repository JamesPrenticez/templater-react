import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Link, NavLink, useParams} from "react-router-dom";

import Footer from './Footer'

import Homepage from './Homepage'

import JobList from './JobList'
import JobAdd from './JobAdd'
import JobView from './JobView'
import JobEdit from './JobEdit'
import JobSums from './JobSums'
import JobSelections from './JobSelections'
import SalesDoc from './SalesDoc'

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
      <div className="title">Jennian Homes</div>
        <NavLink to="/home">Homepage</NavLink>
        <NavLink to="/job_add">Add</NavLink>
        <NavLink to="/job_list">List</NavLink>
        <Link to={`/job_selections/Alexandra`}>Selections (A)</Link>
        <Link to={`/sales_doc/Alexandra`}>Sales Doc (A)</Link>
      </nav>
    
      <Route path="/home" component={Homepage}/>
      <Route path="/job_add" component={JobAdd}/>
      <Route path="/job_list" component={JobList}/>
      <Route path="/job_sums" component={JobSums}/>
      <Route path="/job_view/:jobName" render={(matchProps) => <JobView {...matchProps}{...this.props}/>} /> 
      <Route path="/job_edit/:jobName" render={(matchProps) => <JobEdit {...matchProps}{...this.props}/>} /> 
      <Route path="/job_selections/:jobName" render={(matchProps) => <JobSelections {...matchProps}{...this.props}/>} /> 
      <Route path="/sales_doc/:jobName" render={(matchProps) => <SalesDoc {...matchProps}{...this.props}/>} /> 
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
