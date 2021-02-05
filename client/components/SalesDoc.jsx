import React from 'react'
import {connect} from 'react-redux'

import SalesDocCoverpage from './SalesDocCoverpage'

class SalesDoc extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
                <>
                <div className="salesDoc">
                    <div className="page" id="page">
                        <div className="subpage">
                            <SalesDocCoverpage jobs={this.props.jobs}/>
                        </div>
                    </div>
                    <div className="page" id="page">
                        <div className="subpage">Page 2/10</div>
                    </div>
                    <div className="page" id="page">
                        <div className="subpage">Page 3/10</div>
                    </div>
                    <div className="page" id="page">
                        <div className="subpage">Page 4/10</div>
                    </div>
                    <div className="page" id="page">
                        <div className="subpage">Page 5/10</div>
                    </div>
                </div>
                </>
            )
        }
    }

    export default connect()(SalesDoc)
