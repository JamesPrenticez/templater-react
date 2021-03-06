import React from 'react'
import { connect } from 'react-redux'
import { FaArrowLeft } from 'react-icons/fa'

import SalesDocCoverpage from './SalesDocCoverpage'
import SalesDocTOC from './SalesDocTOC'

import SalesDocPage1 from './SalesDocPage1'
import SalesDocPage2 from './SalesDocPage2'
import SalesDocPage3 from './SalesDocPage3'
import SalesDocPage4 from './SalesDocPage4'
import SalesDocPage5 from './SalesDocPage5'
import SalesDocPage6 from './SalesDocPage6'
import SalesDocPage7 from './SalesDocPage7'
import SalesDocPage8 from './SalesDocPage8'
import SalesDocPage9 from './SalesDocPage9'
import SalesDocPage10 from './SalesDocPage10'
import SalesDocPage11 from './SalesDocPage11'
import SalesDocPage12 from './SalesDocPage12'

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
                            <SalesDocPage2 {...this.props}/>
                        </div>
                    </div>

                    {/*---------- Page 3 - EXCAVTION ----------*/}
                    <div className="page" id="page">
                        <div className="subpage">
                            <SalesDocPage3 {...this.props}/>
                        </div>
                    </div>

                    {/*---------- Page 4 - FLOOR AND ROOF ----------*/}
                    <div className="page" id="page">
                        <div className="subpage">
                            <SalesDocPage4 {...this.props}/>
                        </div>
                    </div>

                    {/*---------- Page 5 - CLADDING & ALUMINUM JOINERY ----------*/}
                    <div className="page" id="page">
                        <div className="subpage">
                            <SalesDocPage5 {...this.props}/>
                        </div>
                    </div>

                    {/*---------- Page 6 - INSULATION, LININGS & TRIM ----------*/}
                    <div className="page" id="page">
                        <div className="subpage">
                            <SalesDocPage6 {...this.props}/>
                        </div>
                    </div>

                    {/*---------- Page 7 - INTERIOR DOORS, WARDROBES ----------*/}
                    <div className="page" id="page">
                        <div className="subpage">
                            <SalesDocPage7 {...this.props}/>
                        </div>
                    </div>

                    {/*---------- Page 8 - KITCHEN & PANTRY JOINERY ----------*/}
                    <div className="page" id="page">
                        <div className="subpage">
                            <SalesDocPage8 {...this.props}/>
                        </div>
                    </div>

                    {/*---------- Page 9 - APPLIANCES ----------*/}
                    <div className="page" id="page">
                        <div className="subpage">
                            <SalesDocPage9 {...this.props}/>
                        </div>
                    </div>

                    {/*---------- Page 10 - ELECTRICAL ----------*/}
                    <div className="page" id="page">
                        <div className="subpage">
                            <SalesDocPage10 {...this.props}/>
                        </div>
                    </div>

                    {/*---------- Page 11 - PLUMBING FITTINGS & FIXTURES ----------*/}
                    <div className="page" id="page">
                        <div className="subpage">
                            <SalesDocPage11 {...this.props}/>
                        </div>
                    </div>

                    {/*---------- Page 12 - PLUMBING FITTINGS & FIXTURES PICTURES ONLY ----------*/}
                    <div className="page" id="page">
                        <div className="subpage">
                            <SalesDocPage12 {...this.props}/>
                        </div>
                    </div>

                </div>
                </>
            )
        }
    }

    export default connect()(SalesDoc)
