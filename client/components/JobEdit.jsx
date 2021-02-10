import React from 'react'
import { connect } from 'react-redux'
import { FaPlusCircle, FaArrowLeft } from 'react-icons/fa'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

import { updateJob } from '../actions'
import { editJob } from '../api'

class JobEdit extends React.Component {
    constructor(props) {
        super(props)
        let { jobs } = this.props
        this.state = {
            dateCreated: jobs[0].dateCreated,
            jobName: jobs[0].jobName,
            clientName: jobs[0].clientName,
            siteAddress: jobs[0].siteAddress,
            collection: jobs[0].collection,
            lotNumber: jobs[0].lotNumber,
            jobNumber: jobs[0].jobNumber,
            salesPerson: jobs[0].salesPerson,
            gfa: jobs[0].gfa,
            cost: jobs[0].cost,

        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    listenForKeys = (event) => {
        switch (event.keyCode) {
            case 13:
                this.submit()
                break

            case 27:
                if (this.props.onEscape) this.props.onEscape()
                break
        }
    }

    submit = () => {
        let { id } = this.props.jobs[0]
        let { name } = this.state
        editJob(id, name)
            .then(() => {
                this.props.dispatch(updateJob(id, name))
                if (this.props.onEscape) this.props.onEscape()
            })
    }


    render() {
        const addStyle = { color: 'green', marginLeft: '7px', cursor: 'pointer' }
        const backStyle = {color: 'purple', height: '50px', width: '50px', marginLeft: '7px', cursor: 'pointer' }
        return (
            <>
                <div className="jobDetails">
                    <div className="grid">
                        <h4>Date Created</h4>
                        <input
                            name='dateCreated'
                            autoFocus={true}
                            value={this.state.dateCreated}
                            onKeyDown={this.listenForKeys}
                            onChange={this.handleChange}
                            placeholder={this.state.dateCreated}
                        />

                        <h4>Job Name</h4>
                        <input
                            name='jobName'
                            autoFocus={true}
                            value={this.state.jobName}
                            onKeyDown={this.listenForKeys}
                            onChange={this.handleChange}
                            placeholder={this.state.jobName}
                        />

                        <h4>Client Name</h4>
                        <input
                            name='clientName'
                            autoFocus={true}
                            value={this.state.clientName}
                            onKeyDown={this.listenForKeys}
                            onChange={this.handleChange}
                            placeholder={this.state.clientName}
                        />

                        <h4>Site Address</h4>
                        <input
                            name='siteAddress'
                            autoFocus={true}
                            value={this.state.siteAddress}
                            onKeyDown={this.listenForKeys}
                            onChange={this.handleChange}
                            placeholder={this.state.siteAddress}
                        />

                        <h4>Collection</h4>
                        <input
                            name='collection'
                            autoFocus={true}
                            value={this.state.collection}
                            onKeyDown={this.listenForKeys}
                            onChange={this.handleChange}
                            placeholder={this.state.collection}
                        />

                        <h4>Lot Number</h4>
                        <input
                            name='lotNumber'
                            autoFocus={true}
                            value={this.state.lotNumber}
                            onKeyDown={this.listenForKeys}
                            onChange={this.handleChange}
                            placeholder={this.state.lotNumber}
                        />

                        <h4>Job Number</h4>
                        <input
                            name='jobNumber'
                            autoFocus={true}
                            value={this.state.jobNumber}
                            onKeyDown={this.listenForKeys}
                            onChange={this.handleChange}
                            placeholder={this.state.jobNumber}
                        />

                        <h4>Sales Person</h4>
                        <input
                            name='salesPerson'
                            autoFocus={true}
                            value={this.state.salesPerson}
                            onKeyDown={this.listenForKeys}
                            onChange={this.handleChange}
                            placeholder={this.state.salesPerson}
                        />

                        <h4>GFA</h4>
                        <input
                            name='gfa'
                            autoFocus={true}
                            value={this.state.gfa}
                            onKeyDown={this.listenForKeys}
                            onChange={this.handleChange}
                            placeholder={this.state.gfa}
                        />

                        <h4>Cost</h4>
                        <input
                            name='cost'
                            autoFocus={true}
                            value={this.state.cost}
                            onKeyDown={this.listenForKeys}
                            onChange={this.handleChange}
                            placeholder={this.state.cost}
                        />
                    </div>

                    <img className='floatRight' style={{ backgroundImage: `url(${this.props.jobs[0].imageCover})` }}></img>


                </div>

                <FaPlusCircle onClick={this.submit} role='button' style={addStyle} />
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.name
    }
}

function mapDispatchToProps(dispatch) {
    return {
        submit: () => dispatch({ type: 'UPDATE_TASK', id: this.props.jobs[0], name: thiis.state.name })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(JobEdit)