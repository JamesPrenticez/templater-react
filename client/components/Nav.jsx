import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";
import ImageViewer from './ImageViewer'

export default class Nav extends React.Component {
render(){
    const {job, dispatch} = this.props

        return(
        <>
        {/* <nav className="Nav">
          <div className="Nav__container">
<Router>
            <Link to="/a" className="Nav__brand">
              <img src="logo.svg" className="Nav__logo" />
            </Link>

            <div className="Nav__right">

              <ul className="Nav__item-wrapper">
                <li className="Nav__item">
                  <Link className="Nav__link" to="/a">Link 1</Link>
                </li>

                <li className="Nav__item">
                  <Link className="Nav__link" to="/b">Link 2</Link>
                </li>

                <li className="Nav__item">
                  <Link className="Nav__link" to="/c">Link 3</Link>
                </li>

              </ul>

            </div>
</Router>
          </div>
        </nav> */}
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/a">About</a></li>
          <li><a href="/b">Contact</a></li>
        </ul>
        </nav>
        </>

        )
    }
}