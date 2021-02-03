import React from 'react'
import {connect} from 'react-redux'

import SelectionsPreliminary from './SelectionsPreliminary'
import SelectionsEnvelope from './SelectionsEnvelope'
import SelectionsInterior from './SelectionsInterior'
import SelectionsServices from './SelectionsServices'
import SidebarSelections from './SidebarSelections'

class JobSelections extends React.Component {
render(){
    console.log(this.props)
        return(
            <>
                <SidebarSelections />

            <div className="jobContainer">					
                {this.props.currentPage == 'preliminary' ? <SelectionsPreliminary /> : ''}  
                {this.props.currentPage == 'envelope' ? <SelectionsEnvelope /> : ''}  
                {this.props.currentPage == 'interiors' ? <SelectionsInterior /> : ''}  
                {this.props.currentPage == 'services' ? <SelectionsServices /> : ''}               
                {this.props.currentPage == 'siteworks' ? <SelectionsSiteworks /> : ''}     
            </div>

            </>
        )
    }
}


export default connect()(JobSelections)