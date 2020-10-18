import React from 'react'
import {Link} from 'react-router-dom'

export default class Products extends React.Component {
render(){
    const {job, dispatch} = this.props

        return(
            <>
            <Link to={`/`}><h4>Home</h4></Link>

            <h4>Client Details</h4>

			<div class="formGrid">
            <label for="cost">: </label>
				<input type="text" id="cost" name="cost" placeholder="$500,000.00"></input>
			</div>

            <h4>Preliminary and General </h4>
            <p>No allowance has been made for the forming of a driveway; this may be an extra to the contract if this is required to gain access to the site as part of the earthworks</p>
            
            <p>No allowance has been made for any alterations to the street crossing.  Jennian Homes will inspect the existing footpath, kerb and crossing prior to the works beginning and will notify the owner of any damage. Jennian Homes will ensure that all their contractors use the dedicated vehicle crossing, however if this crossing becomes damaged Jennian Homes will not be responsible to rectify the damage</p>
            
            <h4>Owners Care</h4>
            <p>There is no owners work and/or materials being undertaken by the owner </p>
            <p>Whenever any part of this contract, works are undertaken by the owner or any materials forming part of the works are supplied by the owner this can only be done with the consent of Jennian Homes</p>
            <p>Such works shall become the responsibility of the owner for the correct insurance cover of the works at the owners cost that any owners work and/or materials are covered</p>
            <p>Light fittings or plumbing fittings that are to be supplied by the owner may incur some additional charges depending on the complexity of the installation of these items</p>
            <p>It is the responsibility of the owner to ensure that the delivery of their products or contractors adhere to the Jennian Homes timeline</p>
            <p>The following owners work and/or materials are being undertaken by the owner: </p>

            <h4>Engineering</h4>
            <p>This project has a RibRaft floor which will need to be inspected and passed by a Structural Engineer, the Engineers professional fees for these inspections has been included in this schedule</p>
            <p></p>
            
            <h4>Retaining Walls</h4>
            <p>No allowance has been made for any form of timber retaining wall</p>
            <p></p>

            <h4>Floor System</h4>
            <p>This contract allows for a Firth RibRaft floor system</p>
            <p></p>

            <h4>Floor System</h4>
            <p>All timber frames shall be Radiata kiln dried 90 x 45 H1.2 treated timber</p>
            <p>Timber frames shall be a combination Radiata kiln dried 90 x 45 and 140 x 45 H1.2 treated framing</p>
            
            <p>Trusses shall be Radiata Pine kiln dried gang nail with a 25-degree pitch spaced at 900 centres</p>
            <p>Trusses shall be Radiata Pine kiln dried gang nail with 25-35 degree pitch spaced at 900 centres</p>

            <p>Includes timber framed columns to entry</p>

            </>
        )
    }
}
















