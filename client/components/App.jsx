import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

import JobList from './JobList'
import JobDetails from './JobDetails'
import JobContract from './JobContract'
import Products from './Products'


const App = () => {
  return (
<>
    <Router>
      <Route exact path='/' component={JobList} />
      <Route exact path='/products' component={Products} />
      <Route exact path='/view' component={JobContract} />

      <Switch>
          <Route exact path="/details/:id" children={<Child/>} />
      </Switch>
    </Router>
</>


  )
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let {id} = useParams();

  return (
      <JobDetails id={id}/>
  );
}

export default App
