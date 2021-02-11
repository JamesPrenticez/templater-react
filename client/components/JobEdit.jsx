import React from 'react'
import { connect } from 'react-redux'
import {FaPlusCircle} from 'react-icons/fa'

import { updateJob } from '../actions'
import { editJob } from '../api'

class JobEdit extends React.Component {
    constructor(props) {
        super(props)
        const { jobs } = this.props
        const { id } = this.props.match.params
        this.state = {
            editing: false,
            dateCreated: jobs[id].dateCreated,
            jobName: jobs[id].jobName,
            clientName: jobs[id].clientName,
            siteAddress: jobs[id].siteAddress,
            collection: jobs[id].collection,
            lotNumber: jobs[id].lotNumber,
            jobNumber: jobs[id].jobNumber,
            salesPerson: jobs[id].salesPerson,
            gfa: jobs[id].gfa,
            cost: jobs[id].cost
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
        let x = this.props.match.params.id
        let id = this.props.jobs[x].id
        let { jobName } = this.state
        console.log(x)
        console.log(id)
        editJob(id, jobName)
            .then(() => {
                this.props.dispatch(updateJob(id, jobName))
                if (this.props.onEscape) this.props.onEscape()
            })
    }

    render() {
        const addStyle = {color: 'purple', height: '50px', width: '50px', marginLeft: '7px', cursor: 'pointer' }
        return (
            <>
            <div className='jobDetailButtons'>
                <FaPlusCircle onClick={this.submit} role='button' style={addStyle} />
            </div>
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
        submit: () => dispatch({ type: 'UPDATE_TASK', id: this.props.jobs[0], name: this.state.name })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobEdit)