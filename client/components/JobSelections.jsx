import React from 'react'

import SelectionsPreliminary from './SelectionsPreliminary'
import SelectionsEnvelope from './SelectionsEnvelope'
import SelectionsInterior from './SelectionsInterior'
import SelectionsServices from './SelectionsServices'

export default class JobSelections extends React.Component {
render(){
    const {job, dispatch} = this.props

        return(
            <>
            <div className="jobContainer">					
                <SelectionsPreliminary />
                <SelectionsEnvelope />
                <SelectionsInterior />
                <SelectionsServices />
            </div>
            </>
        )
    }
}