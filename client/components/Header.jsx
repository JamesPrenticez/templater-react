import React from 'react'

export default class Header extends React.Component {
render(){
    const {job, dispatch} = this.props

        return(
            <>
            <header>
                <div className="title">Jennian Homes</div>
            </header> 
            </>
        )
    }
}