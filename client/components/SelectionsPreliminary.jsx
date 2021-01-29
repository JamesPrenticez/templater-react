import React from 'react'
import {connect} from 'react-redux'


class SelectionsPreliminary extends React.Component {
    render() {
        return (
            <>
                <div className="jobContainer">

                    <h1 className="selectionsHeader">Preliminary and General</h1>

                    <h4>Building Consent</h4>
                        <p>Provisional Sum $4,500</p>
                        <p>Excludes development contributions or service connection fees</p>
                        <p>Excludes Resource Consent Fees</p>

                    <h4>Engineering</h4>
                        <p>Includes inspection fees for Ribraft floor system</p>
                        <p>Excludes any structural design fees</p>
                        <p></p>

                    <h4>Survey</h4>
                        <p>Includes an allowance to provide a section survey</p>
                        <p></p>
                        <p></p>

                    <h4>Mains Cable and Temp Power</h4>
                        <p>Includes for the supply of temporary power for the duration of the build</p>
                        <p>Includes for a maximum of 20m of single phase mains cable</p>
                        <p></p>

                    <h4></h4>
                        <p></p>
                        <p></p>
                        <p></p>

                    <h4></h4>
                        <p></p>
                        <p></p>
                        <p></p>  

                </div>
            </>
        )
    }
}

export default connect()(SelectionsPreliminary)
