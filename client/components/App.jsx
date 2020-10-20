import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import JobList from './JobList'
import JobContract from './JobContract'
import Sums from './Sums'
import Products from './Products'


const App = () => {
  return (
<>
    <Router>
      <Route exact path='/' component={JobList} />
      <Route path='/view' component={JobContract} />
      <Route path='/sums' component={Sums} />
      <Route path='/products' component={Products} />
    </Router>
</>
  )
}

export default App
