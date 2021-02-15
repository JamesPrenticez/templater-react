import React from 'react'
import moment from 'moment'
import {formatCurrency} from './Utilities/utilities'

export default class SalesDocPage4 extends React.Component {
render(){
    const { id } = this.props.match.params
    const { jobs } = this.props

    let array = jobs
    let idYourLookingFor = id
    let i = array.findIndex(obj => obj.id == idYourLookingFor)

        return(
            <>
                <div className='pageHeader'></div>

                <div className='floorSystem'>
                    <h6>FLOOR SYSTEM</h6>
                    <ol>
                        <li>This contract allows for a Firth RibRaft floor system</li>
                        <li>This is a reinforced concrete waffle raft floor slab consisting of a grid of polystyrene pods to form a reinforced concrete floor slab</li>
                        <li>The perimeter edge of the foundation will be boxed and left fairface finish not plastered or painted</li>
                        <li>Floor Slab will be 85mm thick concrete reinforced with 615-500E ductile mesh</li>
                    </ol>
                    <div className='salesImages'></div>
                </div>

                <div className='framing'>
                    <h6>FRAMING</h6>
                    <ol>
                        <li>All timber frames shall be Radiata kiln dried 90 x 45 H1.2 treated timber</li>
                        <li>Trusses shall be Radiata Pine kiln dried gang nail with a 25-degree pitch</li>
                        <li>Includes timber framed columns to entry</li>
                    </ol>
                    <div className='salesImages'></div>
                </div>

                <div className='roofFasciaGutterDownpipes'>
                    <h6>ROOF, FASCIA, GUTTER, DOWNPIPES</h6>
                    <ol>
                        <li>Roofing shall be Gerard Stratos Satin with angle trim Roofing tiles installed by a Gerard Certified Roofer</li>
                        <li>Gerard roofing comes complete with a 50 year guarantee</li>
                        <li>Fascia and gutter shall be Freeline fascia and quad gutter system</li>
                        <li>Downpipes shall be 80mm PVC round profile Marley coloured</li>
                    </ol>
                    <div className='salesImages'></div>
                    <div className='salesImages'></div>
                    <div className='salesImages'></div>
                </div>

                <div className='soffit'>
                    <h6>SOFFIT</h6>
                    <ol>
                        <li>Shall be horizontal, and lined with Hardies Hardiflex</li>
                        <li>Includes PVC jointers</li>
                    </ol>
                    <div className='salesImages'></div>
                </div>

                <div className='pageFooter'>
                    <div id='hozLine'></div>
                    Initial for Customer:
                    Page 3
                    Initial for Jennian Homes:
                </div>
            </>
        )
    }
}