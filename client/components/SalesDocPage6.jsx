import React from 'react'
import moment from 'moment'
import {formatCurrency} from './Utilities/utilities'

export default class SalesDocPage6 extends React.Component {
render(){
    const { id } = this.props.match.params
    const { jobs } = this.props

    let array = jobs
    let idYourLookingFor = id
    let i = array.findIndex(obj => obj.id == idYourLookingFor)

        return(
            <>
                <div className='pageHeader'></div>

                <div className='roofPenetrations'>
                    <h6>SKYLIGHTS, ROOFLIGHTS AND SOLARTUBES</h6>
                    <ol>
                        <li>No allowance has been made for a solar tube, skylight or rooflight</li>
                    </ol>
                </div>

                <div className='insulation'>
                    <h6>THERMAL INSULATION</h6>
                    <ol>
                        <li>Pink Batts to the ceiling of the home shall be R3.6</li>
                        <li>Pink Batts to all outer walls of the home shall be R2.6</li>
                        <li>No insulation shall be fitted to the external walls and ceiling of the garage, but will be fitted to the internal wall between garage and house</li>
                    </ol>
                    <div className='salesImages'></div>
                </div>

                <div className='interiorLinings'>
                    <h6>INTERIOR LININGS</h6>
                    <ol>
                        <li>Rondo steel ceiling batten system fitted to Rondo expansion clips to minimize any screw popping</li>
                        <li>Ceilings shall be lined with 13mm GIB</li>
                        <li>Walls shall be lined horizontally with 10mm GIB</li>
                        <li>Aqualine GIB to walls and ceilings of the bathroom and ensuite</li>
                        <li>All walls and ceilings to be stopped to a level 4 finish</li>
                        <li>All 90-degree external corners shall be square stopped</li>
                    </ol>
                    <div className='salesImages'></div>
                    <div className='salesImages'></div>
                </div>

                <div className='ceiling'>
                    <h6>CEILING HEIGHTS, FEATUERS & BULKHEADS</h6>
                    <ol>
                        <li>All rooms shall have 2.4m flat ceilings</li>
                        <li>No allowance has be made for a bulkhead down from the ceiling above the kitchen joinery</li>
                    </ol>
                </div>

                <div className='trim'>
                    <h6>SKIRTING, SCOTIA & ARCHITRAVE</h6>
                    <ol>
                        <li>Skirting shall be 60mm x 12mm MDF bevel edge with the same profile in pine to the wet areas</li>
                        <li>Architrave shall be 60mm x 12mm MDF bevel edge with the same profile in pine to the wet areas</li>
                        <li>Scotia shall be 55mm GIB coving fitted to the wall/ceiling junction in the 2.4-metre-high ceiling areas</li>
                        <li>Scotia shall be MDF bevelled cornice to the wall/ceiling junction in wardrobes and cupboards</li>
                    </ol>
                    <div className='salesImages'></div>
                    <div className='salesImages'></div>
                </div>

                <div className='pageFooter'>
                    <div id='hozLine'></div>
                    Initial for Customer:
                    Page 6
                    Initial for Jennian Homes:
                </div>
            </>
        )
    }
}