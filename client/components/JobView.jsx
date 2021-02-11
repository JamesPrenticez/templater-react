import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link, useParams, Redirect } from "react-router-dom";
import { FaEdit, FaSearchPlus, FaRegFileAlt, FaArrowLeft, FaTrashAlt } from 'react-icons/fa'

import JobEdit from './JobEdit'
import JobDetails from './JobDetails'

import { removeJob } from '../actions'
import { deleteJob } from '../api'
import currentForm from '../reducers/currentForm';

class JobView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentForm: '',
            toJobList: false,
        }
        this.redirectToJobList = this.redirectToJobList.bind(this)
        this.deleteJob = this.deleteJob.bind(this)
    }

    redirectToJobList = () => {
        this.setState(() => ({
            toJobList: true
        }))
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    deleteJob = () => {
        const { jobs } = this.props
        const { id } = this.props.match.params

        if (confirm("Are you sure you want to delete " + `${jobs[id].jobName}` + "?")) {
            deleteJob(id)
                .then(() => {
                    this.props.dispatch(removeJob(id))
                })
        }
    }

    render() {
        const editStyle = { color: 'orange', height: '35px', width: '35px', marginLeft: '7px', cursor: 'pointer' }
        const selectionsStyle = { color: 'green', height: '35px', width: '35px', marginLeft: '7px', cursor: 'pointer' }
        const salesDocStyle = { color: 'blue', height: '35px', width: '35px', marginLeft: '7px', cursor: 'pointer' }
        const backStyle = { color: 'DarkMagenta', height: '35px', width: '35px', marginLeft: '7px', cursor: 'pointer' }
        const deleteStyle = { color: 'red', height: '35px', width: '35px', marginLeft: '7px', cursor: 'pointer' }

        const { jobs } = this.props
        const { id } = this.props.match.params

        if (this.state.toJobList === true) {
            return <Redirect to={'/job_list/'} />
        }

        return (
            <>
                <div className="jobContainer">

                        {this.props.currentForm === 'view' ? 
                            <>
                                <fieldset><legend><h1>View Job</h1></legend> 
                                    <FaArrowLeft style={backStyle} onClick={this.redirectToJobList} />
                                    <div className='jobDetailButtons'>
                                    <FaEdit style={editStyle} onClick={this.props.edit} role='button' />
                                    <FaSearchPlus style={selectionsStyle} onClick={this.props.selections} role='button' />
                                    <FaRegFileAlt style={salesDocStyle} onClick={this.props.salesDoc} role='button' />
                                    <FaTrashAlt style={deleteStyle} onClick={this.deleteJob} role='button' />
                                    </div>
                                    <JobDetails {...this.props.match.params}{...this.props} onEscape={this.hideEditForm} />
                                </fieldset>
                            </>
                        : ''}

                        {this.props.currentForm === 'edit' ? 
                            <>
                                <fieldset><legend><h1>Edit Job</h1></legend>
                                    <FaArrowLeft style={backStyle} onClick={this.props.view} />
                                    <JobEdit {...this.props.match.params}{...this.props} onEscape={this.hideEditForm} />
                                </fieldset>
                            </> 
                        : ''}

                        {this.props.currentForm == 'selections' ?
                            <>
                            </>
                        : ''}

                        {this.props.currentForm == 'salesDoc' ?
                            <>
                            </>
                        : ''}
                </div>
            </>
        )
    }
}

function mapStateToProps(state){
    console.log(state.currentForm)
    return {
      currentForm: state.currentForm
    }
}

function mapDispatchToProps(dispatch) {
  return {
    view: () => dispatch({type: 'CHANGE_FORM', form: 'view'}),
    edit: () => dispatch({type: 'CHANGE_FORM', form: 'edit'}),
    selections: () => dispatch({type: 'CHANGE_FORM', form: 'selections'}),
    salesDoc: () => dispatch({type: 'CHANGE_FORM', form: 'salesDoc'}),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobView)
