import React from 'react'
import {Link} from 'react-router-dom'

export default class JobListItem extends React.Component {
render(){
    const {job, dispatch} = this.props

        return(
            <>
            <Link to={`/`}><h4>Home</h4></Link>

            <h4>Client Details</h4>

			<div class="formGrid">
				<label for="date">Date:</label>
				<input type="date" id="date" name="date" min="2020-01-01" max="2025-12-31"></input>
				<button onClick="autoText('date')">Update</button>

				<label for="clientName">Client Name: </label>
				<input type="text" id="clientName" name="clientName" placeholder="client name"></input>
				<button onClick="autoText('clientName')">Update</button>

				<label for="jobName">Job Name: </label>
				<input type="text" id="jobName" name="jobName" placeholder="job name"></input>
				<button onClick="autoText('jobName')">Update</button>
				
				<label for="jobNumber">Job Name: </label>
				<input type="text" id="jobNumber" name="jobNumber" placeholder="SS01"></input>
				<button onClick="autoText('jobNumber')">Update</button>

				<label for="siteAddress">Site Address: </label>
				<input type="text" id="siteAddress" name="siteAddress" placeholder="site address"></input>
				<button onClick="autoText('siteAddress')">Update</button>

				<label for="lotNumber">Lot Number: </label>
				<input type="text" id="lotNumber" name="lotNumber" placeholder="lot number"></input>
				<button onClick="autoText('lotNumber')">Update</button>

				<label for="gfa">GFA: </label>
				<input type="text" id="gfa" name="gfa" placeholder="100m2"></input>
				<button onClick="autoText('gfa')">Update</button>

				<label for="cost">Cost (including GST): </label>
				<input type="text" id="cost" name="cost" placeholder="$500,000.00"></input>
				<button onClick="autoText('cost')">Update</button>

				<label for="deposit">Deposit: </label>
				<input type="text" id="deposit" name="deposit" placeholder="$50,000.00"></input>
				<button onClick="autoText('deposit')">Update</button>

				<label for="balance">Balance: </label>
				<input type="text" id="balance" name="balance" placeholder="$450,000.00"></input>
				<button onClick="autoText('balance')">Update</button>

				<label for="buildingConsent">Building Consent: </label>
				<input type="text" id="buildingConsent" name="buildingConsent" placeholder="$7,000.00"></input>
				<button onClick="autoText('buildingConsent')">Update</button>
				
				<label for="drainage">Provisional Sum Drainage: </label>
				<input type="text" id="drainage" name="drainage" placeholder="$5,000.00"></input>
				<button onClick="autoText('buildingConsent')">Update</button>

				<label for="carpet">Provisional Carpet: </label>
				<input type="text" id="carpet" name="carpet" placeholder="$6,400.00"></input>
				<button onClick="autoText('carpet')">Update</button>

				<label for="vinyl">Provisional Vinyl: </label>
				<input type="text" id="vinyl" name="vinyl" placeholder="$3,800.00"></input>
				<button onClick="autoText('carpet')">Update</button>

				<label for="tiles">Provisional Tiles: </label>
				<input type="text" id="tiles" name="tiles" placeholder="$6,800.00"></input>
				<button onClick="autoText('tiles')">Update</button>
			</div>

            </>
        )
    }
}