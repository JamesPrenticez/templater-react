import React from 'react'
import { connect } from 'react-redux'
import { addJob } from '../api'

class JobAdd extends React.Component {
	constructor(props){
		super(props)
			this.state = {
				name: '',
				jobName: '',
				clientName: '',
				siteAddress: '',
				suburb: '',
				lotNumber: '',
				jobNumber: '',		
				gfa: '',
				salesPeople: ''	
			}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.customSalesPerson = this.customSalesPerson.bind(this)
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

	customSalesPerson = () => {
		var salesArr = [...this.state.salesPeople]
		var person = "James"//prompt("Please enter your name")
		var sel = document.getElementById("salesPersonDropDown")
		var opt = document.createElement("option");
		opt.value = `${person}`
		opt.text = `${person}`

		if (person != null) {
			//this.setState({salesPeople: salesArr + person})
			sel.add(opt);
		  }
	}

	handleSubmit = () => {
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
						<select id="suburbDropDown" className="addInput" onChange={this.setBackgroundColor, this.handleChange} >
							<option value="grey">None</option>
							<option value="green">Meadows</option>
							<option value="red">Richmond</option>
						</select>

						<label htmlFor="lotNumber" className="addDescription">Lot Number</label>
						<input type="text" name="lotNumber" id="lotNumber" className="addInput" placeholder="DP 15692" onChange={this.handleChange}></input>

						<label htmlFor="jobNumber" className="addDescription">Job Number</label>
						<input type="text" name="jobNumber" id="jobNumber" className="addInput" placeholder="JNB 001" onChange={this.handleChange}></input>
						
						<label htmlFor="gfa" className="gfaDescription">GFA</label>
						<input type="text" name="gfa" id="gfa" className="gfaInput" placeholder="150m2" onChange={this.handleChange}></input>

						<label htmlFor="salesPerson" className="addDescription">Sales Person</label>

						<select id="salesPersonDropDown" name="salesPeople" className="salesPersonInput">
							<option value="Ryan">Ryan</option>
							<option value="Christine">Christine</option>
							<option value="Steve">Steve</option>
							<option value="Hugh">Hugh</option>
							<option value="None">None</option>
						</select>
						<button onClick={this.customSalesPerson}>Add Sales Person</button>

						<button id="addJobButton" className="submitButton" onClick={this.handleSubmit}>Create Job</button>

</form>
				</div>
			</div>
			</>
		)
	}
}

export default connect()(JobAdd) 