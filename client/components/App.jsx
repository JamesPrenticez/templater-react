import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

import Header from './Header'
import Footer from './Footer'
import Homepage from './Homepage'
import Sidebar from './Sidebar'

import AddJob from './AddJob'
import JobList from './JobList'
import ImageViewer from './ImageViewer'
import JobDetails from './JobDetails'
import JobContract from './JobContract'
import Products from './Products'
import Onepager from './Onepager'

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
          <li><Link to="/image_viewer">Image Viewer</Link></li>
          <li><Link to="/job_list">Job List</Link></li>
          <li><Link to="/add_job">Add Job</Link></li>
          <li><Link to="/edit_job">Job Details</Link></li>
          <li><Link to="/selections">Selections</Link></li>
          <li><Link to="/scope_of_works">Scope Of Works</Link></li>

        </ul>
      </nav>

    <Route path="/" exact component={Homepage} />
    <Route path="/image_viewer"  component={ImageViewer} />
    <Route path="/job_list"  component={JobList} />
    <Route path="/add_job"  component={AddJob} />
    <Route path="/edit_job"  component={JobList} />
    <Route path="/selections"  component={Onepager} />
    <Route path="/scope_of_works"  component={JobContract} />


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
