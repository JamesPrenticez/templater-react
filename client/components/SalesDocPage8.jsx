import React from 'react'
import moment from 'moment'
import {formatCurrency} from './Utilities/utilities'

export default class SalesDocPage8 extends React.Component {
render(){
    const { id } = this.props.match.params
    const { jobs } = this.props

    let array = jobs
    let idYourLookingFor = id
    let i = array.findIndex(obj => obj.id == idYourLookingFor)

        return(
            <>
                <div className='pageHeader'></div>

                <div className='kitchen'>
                    <h6>KITCHEN & PANTRY JOINERY</h6>
                    <ol>
                        <li>Kitchen Joinery provided by Trends as per quote KIT_47152 (Provisional Sum $19,422.00) including full width splash back</li>
                    </ol>
                    <div className='kitchenImage'></div>
                    <div className='pantryImage'></div>
                </div>

                <div className='pageFooter'>
                    <div id='hozLine'></div>
                    Initial for Customer:
                    Page 8  
                    Initial for Jennian Homes:
                </div>
            </>
        )
    }
}