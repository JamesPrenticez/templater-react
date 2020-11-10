import React from 'react'
import { connect } from 'react-redux'
import { addJob, getJobs } from '../api'
import { fetchJobs } from '../actions'

class JobAdd extends React.Component {
	//We need to make this a 'controlled form so we add state
	state = {
		name: ''
	}

	setPicture = () => {
		var img = document.getElementById("suburbDropDown");
		var value = suburbDropDown.options[suburbDropDown.selectedIndex].value;
		document.getElementById("suburbImg").src = value;
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

	render() {
		const { job, dispatch } = this.props

		return (
			<>

				<div className="formGrid">
					<div className="formHeader">
						<h4>Add Job</h4>
					</div>
<div>
					<img id="jobCover" src="./img/houses/default.png"></img>
					<img id="suburbImg" src="./img/default.png"></img>
</div>
					<form action="/action_page.php">

						<label htmlFor="jobName">Job Name</label>
						<input type='text' name="jobName" id="jobName" placeholder="Test Job"></input>

						<label htmlFor="clientName">Client Name</label>
						<input type="text" name="clientName" id="clientName" placeholder="John Doe"></input>

						<label htmlFor="address">Site Address</label>
						<input type="text" name="address" id="address" placeholder="123 Fake Street"></input>

						<label htmlFor="suburb">Location</label>
						<select id="suburbDropDown" onChange={this.setPicture}>
							<option value="./img/suburb/default.png">None</option>
							<option value="./img/suburb/meadows.png">Meadows</option>
							<option value="./img/suburb/richmond.png">Richmond</option>
						</select>

						<label htmlFor="lotNumber">Lot Number</label>
						<input type="text" name="lotNumber" id="lotNumber" placeholder="2"></input>

						<label htmlFor="jobNumber">Job Number</label>
						<input type="text" name="jobNumber" id="jobNumber" placeholder="JNB 001"></input>

						<label htmlFor="GFA">GFA</label>
						<input type="text" name="gfa" id="gfa" placeholder="150"></input>

						<label htmlFor="bedrooms">Bedrooms</label>
						<select name="bedrooms" id="bedroomDropDown">
							<option value="0">0</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>

						<input type="submit" value="Submit" onClick={this.submit}></input>

					</form>
				</div>
			</>
		)
	}
}

export default connect()(JobAdd) 