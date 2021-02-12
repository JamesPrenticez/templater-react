import React from 'react'
import {connect} from 'react-redux'


class SelectionsHome extends React.Component {
    render() {
        return (
            <>
                <h1 style={{marginBottom: "100px"}}className="selectionsHeader">Welcome!</h1>
                <h3>You have just begun your journey of building a new home</h3>

                <h5>Go To Section:</h5>
                <button onClick={this.props.viewPreliminary}>P&G</button>
                <button onClick={this.props.viewEnvelope}>Envelope</button>
                <button onClick={this.props.viewInterior}>Interior</button>
                <button onClick={this.props.viewServices}>Services</button>
                <button onClick={this.props.viewSiteworks}>Sitework</button>
            </>
        )
    }
}

export default connect()(SelectionsHome)
