import React from 'react'
import { connect } from 'react-redux'
import { addJob } from '../api'

class JobAdd extends React.Component {
	state = {
		name: '',
		jobName: '',
		clientName: '',
		siteAddress: '',
		suburb: '',
		lotNumber: '',
		jobNumber: ''		
	}
	
	setBackgroundColor = () => {
		var img = document.getElementById("suburbDropDown");
		var value = suburbDropDown.options[suburbDropDown.selectedIndex].value;
		document.getElementById("addForm").style.border = `solid 5px ${value}`;
		document.getElementById("addForm").style.boxShadow = `0 0 5px ${value}`;
		console.log("here")
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	submit = () => {
		addJob(this.state.jobName, this.state.clientName)
		alert(`New job ${this.state.jobName} has been added`)
	}

	render() {
		return (
			<>
			<div className="jobContainer">
				<h1>Add Job</h1>

				<div id="addForm">

<form>
						<label htmlFor="jobName" className="addDescription">Job Name</label>
						<input type='text' name="jobName" id="jobName" className="addInput" placeholder="Test Job" onChange={this.handleChange} />

						<label htmlFor="clientName" className="addDescription">Client Name</label>
						<input type="text" name="clientName" id="clientName" className="addInput" placeholder="John Doe" onChange={this.handleChange} />

						<label htmlFor="address" className="addDescription">Site Address</label>
						<input type="text" name="address" id="address" className="addInput" placeholder="123 Fake Street" onChange={this.handleChange}></input>

						<label htmlFor="suburb" className="addDescription">Suburb</label>
						<select id="suburbDropDown" className="addInput" onChange={this.setBackgroundColor}>
							<option value="grey">None</option>
							<option value="green">Meadows</option>
							<option value="red">Richmond</option>
						</select>

						<label htmlFor="lotNumber" className="addDescription">Lot Number</label>
						<input type="text" name="lotNumber" id="lotNumber" className="addInput" placeholder="DP 15692" onChange={this.handleChange}></input>

						<label htmlFor="jobNumber" className="addDescription">Job Number</label>
						<input type="text" name="jobNumber" id="jobNumber" className="addInput" placeholder="JNB 001" onChange={this.handleChange}></input>

						<button id="addJobButton" className="submitButton" onClick={this.submit}>Create Job</button>
						{/* <input type="submit" value="Submit" onClick={this.submit}></input> */}
</form>
				</div>
			</div>
			</>
		)
	}
}

export default connect()(JobAdd) 