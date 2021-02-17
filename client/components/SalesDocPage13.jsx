import React from 'react'
import moment from 'moment'
import {formatCurrency} from './Utilities/utilities'

export default class SalesDocPage13 extends React.Component {
render(){
    const { id } = this.props.match.params
    const { jobs } = this.props

    let array = jobs
    let idYourLookingFor = id
    let i = array.findIndex(obj => obj.id == idYourLookingFor)

        return(
            <>
                <div className='pageHeader'></div>

                <div className='plumbing'>
                    <h6>PLUMBING</h6>
                    <ol>
                        <li>a)	Shall include the complete internal plumbing of hot and cold water via Fusiotherm pipework</li>
                        <li>b)	Shall include a 250 Litre, Mains Pressure, Enamel, Rheem Hot Water Cylinder </li>
                        <li>c)	Allowance has been made for 3 external hose taps located outside garage, living and ensuite</li>
                        <li>d)	Includes pop up wastes to all vanity basins and the bath</li>
                    </ol>
                    <div className='salesImages'></div>
                </div>

                <div className='fridgeWater'>
                    <h6>FRIDGE WATER SUPPLY</h6>
                    <ol>
                        <li>No allowance has been made for a fridge water connection</li>
                    </ol>
                </div>

                <div className='drainage'>
                    <h6>DRAINAGE</h6>
                    <ol>
                        <li>Includes sewer/stormwater drains, sumps and gullys finished to correct council levels. Should your landscaping affect these finished heights then any rectification work required will be at your own cost</li>
                        <li>All drains, phone, power and water to house. Owners to connect and transfer power and phone account </li>
                        <li>Includes a 300 x 300 surface water sump to the driveway and another one to the patio</li>
                    </ol>
                </div>

                <div className='gas'>
                    <h6>GAS</h6>
                    <ol>
                        <li>No allowance has been made for gas appliances and/or heating</li>
                    </ol>
                </div>

                <div className='heating'>
                    <h6>HEATING</h6>
                    <ol>
                        <li>Shall include a high wall Panasonic CS/CU-RZ42WKR inverter heatpump</li>
                        <li>Interior heat pump unit shall be located in the dining room</li>
                    </ol>
                        <div className='salesImages'></div>
                </div>

                <div className='solar'>
                    <h6>SOLAR</h6>
                    <ol>
                        <li>No allowance has been made for any solar</li>
                    </ol>
                        <div className='salesImages'></div>
                </div>

                <div className='mirrors'>
                    <h6>MIRRORS</h6>
                    <ol>
                        <li>No allowance has been made for any solar</li>
                    </ol>
                        <div className='salesImages'></div>
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