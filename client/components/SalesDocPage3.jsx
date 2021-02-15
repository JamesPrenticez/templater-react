import React from 'react'
import moment from 'moment'
import {formatCurrency} from './Utilities/utilities'

export default class SalesDocPage3 extends React.Component {
render(){
    const { id } = this.props.match.params
    const { jobs } = this.props

    let array = jobs
    let idYourLookingFor = id
    let i = array.findIndex(obj => obj.id == idYourLookingFor)

        return(
            <>
                <div className='pageHeader'></div>

                <div className='ownersCare'>
                    <h6>OWNERS CARE INSURANCE</h6>
                    <ol>
                        <li>There is no Owners Care in this contract</li>
                    </ol>
                </div>

                <div className='clientAppoval'>
                    <h6>ENGINEERING</h6>
                    <ol>
                        <li>This project has a RibRaft floor which will need to be inspected and passed by a Structural Engineer, the Engineers professional fees for these inspections has been included in this schedule</li>
                        <li>Apart from the RibRaft floor this project has no requirement for an Engineer to be involved; however through the discovery of poor bearing ground during the excavation it may become necessary to engage an engineer for a specific foundation design involving additional costs</li>
                        <li>No allowance has been made for a Geotechnical Engineer</li>
                    </ol>
                </div>
                
                <div className='engineering'>
                    <h6>ENGINEERING</h6>
                    <ol>
                        <li>This project has a RibRaft floor which will need to be inspected and passed by a Structural Engineer, the Engineers professional fees for these inspections has been included in this schedule</li>
                        <li>Apart from the RibRaft floor this project has no requirement for an Engineer to be involved; however through the discovery of poor bearing ground during the excavation it may become necessary to engage an engineer for a specific foundation design involving additional costs</li>
                        <li>No allowance has been made for a Geotechnical Engineer</li>
                    </ol>
                </div>

                <div className='tempPower'>
                    <h6>TEMPORARY POWER & MAINS POWER SUPPLY</h6>
                    <ol>
                        <li>This contract makes provision for a temporary power supply from the on-site black box</li>
                        <li>Includes the supply and laying of a maximum of 20.0m of underground power and telephone cable with connection to the onsite power box and connection fees</li>
                    </ol>
                    <div className='salesImages'></div>
                </div>

                <div className='excavation'>
                    <h6>EXCAVATION</h6>
                    <ol>
                        <li>This contract makes provision for the excavation of the area to be covered by the building floor slab including an area extending up to 1.0m beyond the floor slab perimeter</li>
                        <li>Allowance has been made for this area to be excavated to a maximum depth of 300mm below natural ground level; then filled to a depth of 250mm of compacted hard fill and sand blinding.  However, if this excavation depth is exceeded to obtain solid bearing this would become an extra to the contract price and would be treated as a variation to the contract</li>
                        <li>All topsoil shall be stripped from the area to be covered by the building and top soil stockpiled on-site, bulk excavation removed from site.</li>
                        <li>Includes the excavation and removal of spoil up to 93.00m3</li>
                        <li>Includes the supply and compaction of hardfill up to 70.00m3</li>
                        <li>If additional quantities are required to provide a level platform, due to soft soil, height requirements, etc. these will be charged as a ‘Variation to Contract’</li>
                    </ol>
                </div>

                <div className='retainingWalls'>
                    <h6>RETAINING WALLS</h6>
                    <ol>
                        <li>No allowance has been made for any form of timber retaining wall</li>
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