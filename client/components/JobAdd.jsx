import React from 'react'
import { connect } from 'react-redux'
import { addJob } from '../api'

class JobAdd extends React.Component {
	state = {
		name: 'Alexandra',
		jobName: "test1",
		clientName: "test2"    
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

				<div className="jobContainer">
					<div className="formHeader">
						<h4>Add Job</h4>
					</div>

						<label htmlFor="jobName">Job Name</label>
						<input type='text' name="jobName" id="jobName" placeholder="Test Job" onChange={this.handleChange} />

						<label htmlFor="clientName">Client Name</label>
						<input type="text" name="clientName" id="clientName" placeholder="John Doe" onChange={this.handleChange} />

						{/* <label htmlFor="address">Site Address</label>
						<input type="text" name="address" id="address" placeholder="123 Fake Street"></input>

						<label htmlFor="suburb">Suburb</label>
						<select id="suburbDropDown" onChange={this.setBackgroundColor}>
							<option value="grey">None</option>
							<option value="green">Meadows</option>
							<option value="red">Richmond</option>
						</select>

						<label htmlFor="lotNumber">Lot Number</label>
						<input type="text" name="lotNumber" id="lotNumber" placeholder="DP 15692"></input>

						<label htmlFor="jobNumber">Job Number</label>
						<input type="text" name="jobNumber" id="jobNumber" placeholder="JNB 001"></input>

						<label htmlFor="GFA">GFA</label>
						<input type="text" name="gfa" id="gfa" placeholder="150"></input>

						<label htmlFor="bedrooms">Bedrooms</label>
						<div>
						<input type="radio" name="bedrooms" id="bedroomsRadio" value="0"></input><p>0</p>
						<input type="radio" name="bedrooms" id="bedroomsRadio" value="1"></input><p>1</p>
						<input type="radio" name="bedrooms" id="bedroomsRadio" value="2"></input><p>2</p>
						<input type="radio" name="bedrooms" id="bedroomsRadio" value="3"></input><p>3</p>
						<input type="radio" name="bedrooms" id="bedroomsRadio" value="4"></input><p>4</p>
						</div>						 */}



						<button onClick={this.submit}>Create Job</button>
						{/* <input type="submit" value="Submit" onClick={this.submit}></input> */}



				</div>
			</>
		)
	}
}

export default connect()(JobAdd) 