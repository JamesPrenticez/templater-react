import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addJob, getJobs} from '../api'
import {fetchJobs} from '../actions'

class AddJob extends React.Component {
	     //We need to make this a 'controlled form so we add state
		 state = {
			name: ''    
		}

		handleChange = (event) => {
			this.setState({
				[event.target.name]: event.target.value
			})
		}
	
		submit = () => {
			//get addJob from api
			addJob(this.state.name)
			.then(() => {
				return getJobs()
			})
			.then((jobs) => {
				this.props.dispatch(fetchJobs(jobs))
			})
			console.log(this.state)
		}

		render(){
			const {job, dispatch} = this.props

				return(
					<>
					<h4>Create New Job</h4>

					<input name='name' onChange={this.handleChange}/>           
					<button onClick={this.submit}>Create Job</button>

		{/* 			
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
					</div> */}

					</>
				)
    	}
}

export default connect()(AddJob) 