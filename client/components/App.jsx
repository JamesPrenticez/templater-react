import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

import JobList from './JobList'
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
    <Router>
      <Route exact path='/' component={JobList} />
      <Route exact path='/products' component={Products} />
      <Route exact path='/view' component={JobContract} />
      <Switch>
          <Route exact path="/:id" children={<JobDetails job={this.props.jobs[id]}/>} />
      </Switch>

    </Router>
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
