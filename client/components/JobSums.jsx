import React from 'react'
import {Link} from 'react-router-dom'

export default class JobSums extends React.Component {
render(){
    const {job, dispatch} = this.props

        return(
            <>
            <div className='jobContainer'>
            <Link to={`/`}><h4>Home</h4></Link>

            <h4>Client Details</h4>

			<div class="formGrid">
                <label for="cost">Cost (including GST): </label>
				<input type="text" id="cost" name="cost" placeholder="$500,000.00"></input>

				<label for="deposit">Deposit: </label>
				<input type="text" id="deposit" name="deposit" placeholder="$50,000.00"></input>

				<label for="balance">Balance: </label>
				<input type="text" id="balance" name="balance" placeholder="$450,000.00"></input>

				<label for="buildingConsent">Building Consent: </label>
				<input type="text" id="buildingConsent" name="buildingConsent" placeholder="$7,000.00"></input>
			
				<label for="drainage">Provisional Sum Drainage: </label>
				<input type="text" id="drainage" name="drainage" placeholder="$5,000.00"></input>

				<label for="carpet">Provisional Carpet: </label>
				<input type="text" id="carpet" name="carpet" placeholder="$6,400.00"></input>

				<label for="vinyl">Provisional Vinyl: </label>
				<input type="text" id="vinyl" name="vinyl" placeholder="$3,800.00"></input>

				<label for="tiles">Provisional Tiles: </label>
				<input type="text" id="tiles" name="tiles" placeholder="$6,800.00"></input>

				<button onClick='#'>Update</button>
			</div>
            </div>
            </>
        )
    }
}
















