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
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	submit = () => {
		addJob(this.state.jobName, this.state.clientName)
	}

	render() {
		return (
			<>

				<div id="addForm">
					<div className="formHeader">
						<h4>Add Job</h4>
					</div>

						<label htmlFor="jobName">Job Name</label>
						<input type='text' name="jobName" id="jobName" placeholder="Test Job" onChange={this.handleChange} />

						<label htmlFor="clientName">Client Name</label>
						<input type="text" name="clientName" id="clientName" placeholder="John Doe" onChange={this.handleChange} />

						<label htmlFor="address">Site Address</label>
						<input type="text" name="address" id="address" placeholder="123 Fake Street" onChange={this.handleChange}></input>

						<label htmlFor="suburb">Suburb</label>
						<select id="suburbDropDown" onChange={this.setBackgroundColor} onChange={this.handleChange}>
							<option value="grey">None</option>
							<option value="green">Meadows</option>
							<option value="red">Richmond</option>
						</select>

						<label htmlFor="lotNumber">Lot Number</label>
						<input type="text" name="lotNumber" id="lotNumber" placeholder="DP 15692" onChange={this.handleChange}></input>

						<label htmlFor="jobNumber">Job Number</label>
						<input type="text" name="jobNumber" id="jobNumber" placeholder="JNB 001" onChange={this.handleChange}></input>




						<button onClick={this.submit}>Create Job</button>
						{/* <input type="submit" value="Submit" onClick={this.submit}></input> */}



				</div>
			</>
		)
	}
}

export default connect()(JobAdd) 