import React from 'react'
import { connect } from 'react-redux'

import SidebarSelections from './SidebarSelections'

import SelectionsHome from './SelectionsHome'
import SelectionsPreliminary from './SelectionsPreliminary'
import SelectionsEnvelope from './SelectionsEnvelope'
import SelectionsInterior from './SelectionsInterior'
import SelectionsServices from './SelectionsServices'
import SelectionsSiteworks from './SelectionsSiteworks'

class JobSelections extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: "" };
  }
  render() {
        const { id } = this.props.match.params
        const { jobs } = this.props

        let array = jobs
        let idYourLookingFor = id
        let i = array.findIndex(obj => obj.id == idYourLookingFor)

    return (
      <>

        {/* <SidebarSelections {...this.props} /> */}
        {/* <div className='jobContainerWithSideBar'> */}

        <div className='jobContainer'>
          <fieldset><legend><h1>Job Selections - {jobs[i].jobName}</h1> </legend>
          <div className='selectionsNav'>
            <button onClick={this.props.viewPreliminary}>P&G</button>
            <button onClick={this.props.viewEnvelope}>Envelope</button>
            <button onClick={this.props.viewInterior}>Interior</button>
            <button onClick={this.props.viewServices}>Services</button>
            <button onClick={this.props.viewSiteworks}>Sitework</button>
          </div>

          {this.props.currentPage == 'home' ? <SelectionsHome/> : ''}
          {this.props.currentPage == 'preliminary' ? <SelectionsPreliminary /> : ''}
          {this.props.currentPage == 'envelope' ? <SelectionsEnvelope /> : ''}
          {this.props.currentPage == 'interiors' ? <SelectionsInterior /> : ''}
          {this.props.currentPage == 'services' ? <SelectionsServices /> : ''}
          {this.props.currentPage == 'siteworks' ? <SelectionsSiteworks /> : ''}
          
          </fieldset>
        </div>
      </>
    )
  }
}


function mapStateToProps(state) {
  console.log(state.currentPage)
  return {
    currentPage: state.currentPage
  }
}
function mapDispatchToProps(dispatch) {
  return {
    viewHome: () => dispatch({ type: 'CHANGE_PAGE', page: 'home' }),
    viewPreliminary: () => dispatch({ type: 'CHANGE_PAGE', page: 'preliminary' }),
    viewEnvelope: () => dispatch({ type: 'CHANGE_PAGE', page: 'envelope' }),
    viewInterior: () => dispatch({ type: 'CHANGE_PAGE', page: 'interiors' }),
    viewServices: () => dispatch({ type: 'CHANGE_PAGE', page: 'services' }),
    viewSiteworks: () => dispatch({ type: 'CHANGE_PAGE', page: 'siteworks' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobSelections)