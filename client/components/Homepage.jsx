import React from 'react'

import Header from './Header'

export default class Homepage extends React.Component {
render(){
    const {job, dispatch} = this.props

        return(
            <>
                <Header />
            </>
        )
    }
}