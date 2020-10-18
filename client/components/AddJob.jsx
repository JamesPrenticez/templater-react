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
				<form method="POST">
				<label for="date">Date:</label>
				<input type="date" id="date" name="date" min="2020-01-01" max="2025-12-31"></input>

				<label for="clientName">Client Name: </label>
				<input type="text" id="clientName" name="clientName" placeholder="client name"></input>

				<label for="jobName">Job Name: </label>
				<input type="text" id="jobName" name="jobName" placeholder="job name"></input>
			
				<label for="jobNumber">Job Number: </label>
				<input type="text" id="jobNumber" name="jobNumber" placeholder="SS01"></input>

				<label for="siteAddress">Site Address: </label>
				<input type="text" id="siteAddress" name="siteAddress" placeholder="site address"></input>

				<label for="lotNumber">Lot Number: </label>
				<input type="text" id="lotNumber" name="lotNumber" placeholder="lot number"></input>

				<label for="gfa">GFA: </label>
				<input type="text" id="gfa" name="gfa" placeholder="100m2"></input>
				
				<input type="submit" value="Submit"></input>
				</form>
			</div>

            </>
        )
    }
}