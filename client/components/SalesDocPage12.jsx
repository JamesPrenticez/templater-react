import React from 'react'
import moment from 'moment'
import {formatCurrency} from './Utilities/utilities'

export default class SalesDocPage12 extends React.Component {
render(){
    const { id } = this.props.match.params
    const { jobs } = this.props

    let array = jobs
    let idYourLookingFor = id
    let i = array.findIndex(obj => obj.id == idYourLookingFor)

        return(
            <>
                <div className='pageHeader'></div>

                <div className='plumbingFitting'>
                    <div className='salesImages'></div>
                    <div className='salesImages'></div>
                    <div className='salesImages'></div>
                    <div className='salesImages'></div>
                </div>


                <div className='pageFooter'>
                    <div id='hozLine'></div>
                    Initial for Customer:
                    Page 12  
                    Initial for Jennian Homes:
                </div>
            </>
        )
    }
}