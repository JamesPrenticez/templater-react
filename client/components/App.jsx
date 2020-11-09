import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

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
console.log(this.props)
let id = 1 //useParams()
  return (
<>
  <Header/>
  <Sidebar/>
  <Router>
    <main>
      <nav>
        <ul>
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/standard_range">Standard Range</Link></li>

          <li><Link to="/job_list">List</Link></li>
          <li><Link to="/job_add">Add</Link></li>

          <li><Link to="/job_edit">Edit</Link></li>
          <li><Link to="/job_selections">Selections</Link></li>
          <li><Link to="/job_scope_of_works">Scope Of Works</Link></li>

        </ul>
      </nav>

    <Route path="/" exact component={Homepage}/>
    <Route path="/standard_range" component={StandardRange}/>

    <Route path="/job_list" component={JobList}/>
    <Route path="/job_add" component={JobAdd}/>

    <Route path="/job_edit/:jobName" component={JobEdit}/>
        
    <Route path="/job_sums" component={JobSums}/>
    <Route path="/job_selections" component={JobSelections}/>
    <Route path="/job_scope_of_works" component={JobContract}/>


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
