import React from 'react'
import {connect} from 'react-redux'


class SelectionsHome extends React.Component {
    render() {
        return (
            <>
                <h1 className="selectionsHeader">Welcome!</h1>
                <br />
                <h3>You have just begun your journey of building a new home</h3>
            </>
        )
    }
}

export default connect()(SelectionsHome)
