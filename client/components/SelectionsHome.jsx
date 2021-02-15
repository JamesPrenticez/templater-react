import React from 'react'
import {connect} from 'react-redux'


class SelectionsHome extends React.Component {
    render() {
        return (
            <>
                <h1 className="selectionsHeader">Welcome!</h1>
                <br />
                <h3>You have just begun your journey of building a new home</h3>

                <div className='selectionsNav'>
                    <button onClick={this.props.viewPreliminary}>P&G</button>
                    <button onClick={this.props.viewEnvelope}>Envelope</button>
                    <button onClick={this.props.viewInterior}>Interior</button>
                    <button onClick={this.props.viewServices}>Services</button>
                    <button onClick={this.props.viewSiteworks}>Sitework</button>
                </div>
            </>
        )
    }
}

export default connect()(SelectionsHome)
