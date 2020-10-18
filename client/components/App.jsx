import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import JobList from './JobList'
import AddJob from './AddJob'
import JobContract from './JobContract'
import Sums from './Sums'
import Products from './Products'


const App = () => {
  return (
<>
    <div className='main'>
    <Router>
      <Route exact path='/' component={JobList} />
      <Route path='/add' component={AddJob} />
      <Route path='/view' component={JobContract} />
      <Route path='/sums' component={Sums} />
      <Route path='/products' component={Products} />

    </Router>
    </div>
</>
  )
}

export default App
