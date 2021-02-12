import React from 'react'
import { connect } from 'react-redux'
import { FaPlusCircle, FaArrowLeft } from 'react-icons/fa'

import { updateJob } from '../actions'
import { editJob } from '../api'

class JobEdit extends React.Component {
    constructor(props) {
        super(props)

        const { id } = this.props.match.params
        const { jobs } = this.props

        let array = jobs
        let idYourLookingFor = id
        let i = array.findIndex(obj => obj.id == idYourLookingFor)

        this.state = {
            dateCreated: jobs[i].dateCreated,
            jobName: jobs[i].jobName,
            clientName: jobs[i].clientName,
            siteAddress: jobs[i].siteAddress,
            collection: jobs[i].collection,
            lotNumber: jobs[i].lotNumber,
            jobNumber: jobs[i].jobNumber,
            salesPerson: jobs[i].salesPerson,
            gfa: jobs[i].gfa,
            cost: jobs[i].cost,
            imageCover: jobs[i].imageCover
        }
        this.hideEditForm = this.hideEditForm.bind(this)
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

    hideEditForm = () => {
        this.setState({
            editing: false,
        })
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
        const submitStyle = { color: 'green', height: '35px', width: '35px', marginLeft: '7px', cursor: 'pointer' }
        const backStyle = { color: 'DarkViolet', height: '35px', width: '35px', marginLeft: '7px', cursor: 'pointer' }
        return (
            <>


                    <div className='jobDetailButtons'>
                        {/* Submit Updates Button */}
                        <FaPlusCircle onClick={this.submit} role='button' style={submitStyle} />
                    </div>

                    <div className="jobDetails">
                        <img className='jobDetailsImg' style={{ backgroundImage: `url(${this.state.imageCover})`}} onChange={this.handleChange}></img>

                        <div className="grid">

                            <h4>Job Name</h4>
                            <input
                                name='jobName'
                                className='addInput'
                                autoFocus={true}
                                value={this.state.jobName}
                                onKeyDown={this.listenForKeys}
                                onChange={this.handleChange}
                                placeholder={this.state.jobName}
                            />

                            <h4>Date Created</h4>
                            <input
                                name='dateCreated'
                                className='addInput'
                                autoFocus={true}
                                value={this.state.dateCreated}
                                onKeyDown={this.listenForKeys}
                                onChange={this.handleChange}
                                placeholder={this.state.dateCreated}
                            />

                            <h4>Client Name</h4>
                            <input
                                name='clientName'
                                className='addInput'
                                autoFocus={true}
                                value={this.state.clientName}
                                onKeyDown={this.listenForKeys}
                                onChange={this.handleChange}
                                placeholder={this.state.clientName}
                            />

                            <h4>Site Address</h4>
                            <input
                                name='siteAddress'
                                className='addInput'
                                autoFocus={true}
                                value={this.state.siteAddress}
                                onKeyDown={this.listenForKeys}
                                onChange={this.handleChange}
                                placeholder={this.state.siteAddress}
                            />

                            <h4>Collection</h4>
                            <input
                                name='collection'
                                className='addInput'
                                autoFocus={true}
                                value={this.state.collection}
                                onKeyDown={this.listenForKeys}
                                onChange={this.handleChange}
                                placeholder={this.state.collection}
                            />

                            <h4>Lot Number</h4>
                            <input
                                name='lotNumber'
                                className='addInput'
                                autoFocus={true}
                                value={this.state.lotNumber}
                                onKeyDown={this.listenForKeys}
                                onChange={this.handleChange}
                                placeholder={this.state.lotNumber}
                            />

                            <h4>Job Number</h4>
                            <input
                                name='jobNumber'
                                className='addInput'
                                autoFocus={true}
                                value={this.state.jobNumber}
                                onKeyDown={this.listenForKeys}
                                onChange={this.handleChange}
                                placeholder={this.state.jobNumber}
                            />

                            <h4>GFA</h4>
                            <input
                                name='gfa'
                                className='addInput'
                                autoFocus={true}
                                value={this.state.gfa}
                                onKeyDown={this.listenForKeys}
                                onChange={this.handleChange}
                                placeholder={this.state.gfa}
                            />

                            <h4>Cost</h4>
                            <input
                                name='cost'
                                className='addInput'
                                autoFocus={true}
                                value={this.state.cost}
                                onKeyDown={this.listenForKeys}
                                onChange={this.handleChange}
                                placeholder={this.state.cost}
                            />

                            <h4>Sales Person</h4>
                            <input
                                name='salesPerson'
                                className='addInput'
                                autoFocus={true}
                                value={this.state.salesPerson}
                                onKeyDown={this.listenForKeys}
                                onChange={this.handleChange}
                                placeholder={this.state.salesPerson}
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