import React from 'react'
import {formatCurrency} from './Utilities/utilities'

export default class SalesDocPage2 extends React.Component {
render(){
    const { id } = this.props.match.params
    const { jobs } = this.props

    let array = jobs
    let idYourLookingFor = id
    let i = array.findIndex(obj => obj.id == idYourLookingFor)

        return(
            <>
                <div className='pageHeader'></div>

                <div className='clientAppoval'>
                    <h6>PRELIMINARY AND GENERAL</h6>
                    <ol>
                        <li>This schedule of materials and works shall be read in conjunction with the plans, but where any ambiguity occurs, the schedule shall take precedence</li>
                        <li>All work is to be completed in accordance with the schedule of material and works best industry practice, including the NZ Building Code, and the relevant acceptable solutions. Additional costs incurred because of changes in the building code or conditions over the contract period will be charged to the owner</li>
                        <li>The pictures shown in this schedule are an example only to give an indication of product and the wording is to take precedence over any of the pictures</li>
                        <li>It is the client’s responsibility to highlight all covenants etc</li>
                        <li>Registered Master Builders 10-year guarantee included</li>
                        <li>Includes full working drawings</li>
                        <li>Includes a Provisional Sum of {/*formatCurrency(preliminary[i].buildingConsentValue)*/} for the building consent fees, BRANZ levy and the department of building housing levy</li>
                        <li>Development contribution levy & service connection fees by Tasman District Council are {/*not*/} included</li>
                        <li>Does {/*not*/} include the service connection fee for storm water and sewer charge by the {/*preliminary[i].regionalCouncil*/}</li>
                        <li>Does {/*not*/} include the Network Tasman new load policy fee, this will be included as part of the electrical sub-trade</li>
                        <li>Does {/*not*/} include a Provisional Sum of {/*preliminary[i].resourceConsentValue*/} for Resource consent fees due to breach of side boundary</li>
                        <li>Maintenance period shall be 3 years from possession date</li>
                        <li>From accepting and signing a variation to the contract, an invoice shall be created. All payments of variations are due within seven (7) working days of the date the invoice is issued.  If there is a delay in payment this could result in a delay of your build</li>
                        <li>Builders ‘All Risk’ & Liability insurance cover whilst under construction for goods and services by Jennian Homes only.</li>
                        <li>Jennian Homes have an active Health & Safety Policy in place and is committed to this policy</li>
                        <li>If owners require any extra work, the builder’s labour rate will be charged out at $90.00 per hour</li>
                        <li>If owners require any Draughting and Architectural extra’s or variations these will be charged out at an hourly rate of $100 per hour</li>
                        <li>For any variation that may occur to the contract price Jennian Homes will notify our client at the earliest possible stage</li>
                        <li>House professionally cleaned internally windows internally and externally to the completed home.</li>
                        <li>Removal of all rubbish (skip on site)</li>
                        <li>No allowance has been made for additional works i.e. retaining walls or fences to any internal boundaries due to siteworks performed on adjacent sections that could possibly undermine ground levels</li>
                        <li>No allowance has been made for any alterations to the street crossing.  Jennian Homes will inspect the existing footpath, kerb and crossing prior to the works beginning and will notify the owner of any damage. Jennian Homes will ensure that all their contractors use the dedicated vehicle crossing, however if this crossing becomes damaged Jennian Homes will not be responsible to rectify the damage</li>
                        <li>All costs shown include GST</li>
                    </ol>
                </div>

                <div className='pageFooter'>
                    <div id='hozLine'></div>
                    Initial for Customer:
                    Page 2
                    Initial for Jennian Homes:
                </div>
            </>
        )
    }
}