import React from 'react'
import {connect} from 'react-redux'
import {FaPlusCircle} from 'react-icons/fa'

import { updateTask } from '../actions'
import { editTask } from '../api'

class JobEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.jobs[0].jobName,

        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    listenForKeys = (event) => {
        switch(event.keyCode){
            case 13:
                this.submit()
                break

            case 27:
                if (this.props.onEscape) this.props.onEscape()
                break
        }
    }

    submit = () => {
        let {id} = this.props.jobs[0]
        let {name} = this.state
        editTask(id, name)
            .then(() => {
                this.props.dispatch(updateTask(id, name))
                if (this.props.onEscape) this.props.onEscape()
            })
        }


    render(){
        let style = {color: 'green', marginLeft: '7px', cursor: 'pointer'}
        return (
            <>
                <input 
                    name='name'
                    autoFocus={true}
                    value={this.state.name}
                    onKeyDown={this.listenForKeys}
                    onChange={this.handleChange}
                />

                <FaPlusCircle onClick={this.submit} role='button' style={style}/>
            </>
        )
    }
}

function mapStateToProps(state){
    return {
      name: state.name    
    }
}

function mapDispatchToProps(dispatch) {
    return {
        submit: () => dispatch({type: 'UPDATE_TASK', id: this.props.jobs[0], name: thiis.state.name})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(JobEdit)