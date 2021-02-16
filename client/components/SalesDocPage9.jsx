import React from 'react'
import moment from 'moment'
import {formatCurrency} from './Utilities/utilities'

export default class SalesDocPage9 extends React.Component {
render(){
    const { id } = this.props.match.params
    const { jobs } = this.props

    let array = jobs
    let idYourLookingFor = id
    let i = array.findIndex(obj => obj.id == idYourLookingFor)

        return(
            <>
                <div className='pageHeader'></div>

                <div className='appliances'>
                    <h6>APPLIANCES</h6>
                    <p>All appliances Fisher and Paykel stainless steel finish</p>
                    <ol>
                        <li>a)	Oven – F & P Pyrolytic Wall Oven OB60SC7CEPX1</li>
                        <li>b)	Cooktop ¬– F & P Induction Cooktop CI604CTB1 </li>
                        <li>c)	Rangehood ¬– F & P Designer Rangehood HC90DCXB3</li>
                        <li>d)	Dishwasher – F & P Dishwasher DW60FC6X1</li>
                        <li>e)	Canopy rangehood to be vented to the exterior through the soffit</li>
                    </ol>
                    <div className='salesImages'></div>
                    <div className='salesImages'></div>
                    <div className='salesImages'></div>
                    <div className='salesImages'></div>
                </div>

                <div className='pageFooter'>
                    <div id='hozLine'></div>
                    Initial for Customer:
                    Page 9  
                    Initial for Jennian Homes:
                </div>
            </>
        )
    }
}