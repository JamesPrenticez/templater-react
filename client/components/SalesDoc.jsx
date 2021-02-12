import React from 'react'
import { connect } from 'react-redux'
import { FaArrowLeft } from 'react-icons/fa'

import SalesDocCoverpage from './SalesDocCoverpage'

class SalesDoc extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        const backStyle = { color: 'DarkMagenta', height: '35px', width: '35px', marginLeft: '7px', cursor: 'pointer', position: 'absolute' }

        const { id } = this.props.match.params
        const { jobs } = this.props

        let array = jobs
        let idYourLookingFor = id
        let i = array.findIndex(obj => obj.id == idYourLookingFor)

        return (
                <>
                <div className="salesDoc">
                    <FaArrowLeft style={backStyle} onClick={this.props.view} />
                    <div className="page" id="page">
                        <div className="subpage">
                            <SalesDocCoverpage {...this.props}/>
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
