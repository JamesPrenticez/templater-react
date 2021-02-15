import React from 'react'
import { connect } from 'react-redux'
import { FaArrowLeft } from 'react-icons/fa'

import SalesDocCoverpage from './SalesDocCoverpage'
import SalesDocTOC from './SalesDocTOC'
import SalesDocPage1 from './SalesDocPage1'

class SalesDoc extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        const backStyle = { color: 'DarkMagenta', height: '35px', width: '35px', marginLeft: '7px', cursor: 'pointer', position: 'fixed', zIndex: '100', top: '90px', left: '0px'}

        const { id } = this.props.match.params
        const { jobs } = this.props

        let array = jobs
        let idYourLookingFor = id
        let i = array.findIndex(obj => obj.id == idYourLookingFor)

        return (
                <>
                <FaArrowLeft style={backStyle} onClick={this.props.view} />

                <div className="salesDoc">

                    {/*---------- Cover Page ----------*/}
                    <div className="page" id="page">
                        <div className="subpage">
                            <SalesDocCoverpage {...this.props}/>
                        </div>
                    </div>

                    {/*---------- Table of Contents ----------*/}
                    <div className="page" id="page">
                        <div className="subpage">
                            <SalesDocTOC {...this.props}/>
                        </div>
                    </div>

                    {/*---------- Page 1 - Main Page ----------*/}
                    <div className="page" id="page">
                        <div className="subpage">
                            <SalesDocPage1 {...this.props}/>
                        </div>
                    </div>

                    {/*---------- Page 2 - Preliminary & General ----------*/}
                    <div className="page" id="page">
                        <div className="subpage">
                            {/* <SalesDocPage2 /> */}
                        </div>
                    </div>

                    {/*---------- Page 2 - # ----------*/}
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
