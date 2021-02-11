import React from 'react'
import { connect } from 'react-redux'

import SidebarSelections from './SidebarSelections'

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
    console.log(this.props)
    const { jobs } = this.props
    const { id } = this.props.match.params

    return (
      <>
        <div className="jobContainerWithSidebar">
          <fieldset><legend><h1>Job Selections - {jobs[id].jobName}</h1> </legend>
            <SidebarSelections {...this.props} />

            {this.props.currentPage == 'home' ? <SelectionsPreliminary /> : ''}
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
    viewPreliminary: () => dispatch({ type: 'CHANGE_PAGE', page: 'preliminary' }),
    viewEnvelope: () => dispatch({ type: 'CHANGE_PAGE', page: 'envelope' }),
    viewInterior: () => dispatch({ type: 'CHANGE_PAGE', page: 'interiors' }),
    viewServices: () => dispatch({ type: 'CHANGE_PAGE', page: 'services' }),
    viewSiteworks: () => dispatch({ type: 'CHANGE_PAGE', page: 'siteworks' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobSelections)