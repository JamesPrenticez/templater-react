import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import JobList from './JobList'
import AddJob from './AddJob'
import JobContract from './JobContract'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={JobList} />
      <Route path='/add' component={AddJob} />
      <Route path='/view' component={JobContract} />
    </Router>
  )
}

export default App
