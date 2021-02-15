import React from 'react'
import moment from 'moment'
import {formatCurrency} from './Utilities/utilities'

export default class SalesDocPage5 extends React.Component {
render(){
    const { id } = this.props.match.params
    const { jobs } = this.props

    let array = jobs
    let idYourLookingFor = id
    let i = array.findIndex(obj => obj.id == idYourLookingFor)

        return(
            <>
                <div className='pageHeader'></div>

                <div className='cladding'>
                    <h6>CLADDING</h6>
                    <ol>
                        <li>Shall be a combination of Resene Rockcote 50mm insulated panel system complete with graphex rendered plaster and Vertical Cedar on a 50x25mm cavity batten system and schist stone</li>
                        <li>Gables to be clad as per plans</li>
                    </ol>
                    <div className='salesImages'></div>
                </div>

                <div className='aluminiumJoinery'>
                    <h6>ALUMINIUM JOINERY, ENTRANCE & GARAGE DOOR</h6>
                    <ol>
                        <li>All aluminium window joinery shall be the Altherm Residential Suite</li>
                        <li>Windows and doors in the living areas to be clear double glazed</li>
                        <li>Windows and door in the garage to be clear double glazed</li>
                        <li>Powder-coated aluminium windows and doors as per plan</li>
                        <li>Opalite glazing to the bathroom, ensuite and WC</li>
                        <li>Window hardware to be colour matched Urbo</li>
                        <li>Window reveals to 19mm thick, pine paint grade</li>
                        <li>Including venting catches to all windows excluding slider windows</li>
                        <li>Door sills to be flush with floor coverings.  (Rebated into the floor slab)</li>
                        <li>Entry door to be a Latitude vertical TG&V aluminium entrance door set in an aluminium frame</li>
                        <li>Entry door shall be fitted with a Windsor 7099 pull handle with lock set</li>
                        <li>Garage door to be a Futura sectional, fully insulated door with an internal auto opener, two remotes</li>
                        <li>Garage door openers to be wireless</li>
                        <li>Garage door reveals to be paint grade</li>
                    </ol>
                    <div className='salesImages'></div>
                    <div className='salesImages'></div>
                    <div className='salesImages'></div>
                </div>

                <div className='pageFooter'>
                    <div id='hozLine'></div>
                    Initial for Customer:
                    Page 5
                    Initial for Jennian Homes:
                </div>
            </>
        )
    }
}