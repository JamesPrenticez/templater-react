import React from 'react'
import moment from 'moment'
import { formatCurrency } from './Utilities/utilities'

export default class SalesDocPage10 extends React.Component {
    render() {
        const { id } = this.props.match.params
        const { jobs } = this.props

        let array = jobs
        let idYourLookingFor = id
        let i = array.findIndex(obj => obj.id == idYourLookingFor)

        return (
            <>
                <div className='pageHeader'></div>

                <table id='electricalTable'>
                    <thead>
                        <tr>
                            <th>Hot Points (all RCD protected)</th>
                            <th>Qty</th>
                            <th>Lighting</th>
                            <th>Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='w'>Garage door single powerpoint:</td>
                            <td className='x'>{ }</td>
                            <td className='y'>5ft LED Batten LED442N</td>
                            <td className='z'>{ }</td>
                        </tr>
                        <tr>
                            <td className='w'>Electric water heating point</td>
                            <td className='x'>{ }</td>
                            <td className='y'>Recessed Downlight E-Lightz</td>
                            <td className='z'>{ }</td>
                        </tr>
                        <tr>
                            <td className='w'>Double powerpoint with USB</td>
                            <td className='x'>{ }</td>
                            <td className='y'>Dimmer Switch</td>
                            <td className='z'>{ }</td>
                        </tr>
                        <tr>
                            <td className='w'>Double powerpoint</td>
                            <td className='x'>{ }</td>
                            <td className='y'>Two-way switches</td>
                            <td className='z'>{ }</td>
                        </tr>
                        <tr>
                            <td className='w'>{/*Intentionally empty*/}</td>
                            <td className='x'>{ }</td>
                            <td className='y'>Three-way switches</td>
                            <td className='z'>{ }</td>
                        </tr>
                        <tr>
                            <td className='w'>{/*Intentionally empty*/}</td>
                            <td className='x'>{ }</td>
                            <td className='y'>Pendant Lights (Prime Cost Sum $200 each)</td>
                            <td className='z'>{ }</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th>Appliance Points</th>
                            <th>Qty</th>
                            <th>Fixtures</th>
                            <th>Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='w'>Microwave</td>
                            <td className='x'>{ }</td>
                            <td className='y'>7 Rung towel rail</td>
                            <td className='z'>{ }</td>
                        </tr>
                        <tr>
                            <td className='w'>Fridge</td>
                            <td className='x'>{ }</td>
                            <td className='y'>150mm in-line extraction fan</td>
                            <td className='z'>{ }</td>
                        </tr>
                        <tr>
                            <td className='w'>Dishwasher</td>
                            <td className='x'>{ }</td>
                            <td className='y'>Cavius Miniture Smoke Alarm</td>
                            <td className='z'>{ }</td>
                        </tr>
                        <tr>
                            <td className='w'>Rangehood</td>
                            <td className='x'>{ }</td>
                            <td className='y'>Broadway Mirror</td>
                            <td className='z'>{ }</td>
                        </tr>
                        <tr>
                            <td className='w'>Wall oven</td>
                            <td className='x'>{ }</td>
                            <td className='y'>Bathroom Heater</td>
                            <td className='z'>{ }</td>
                        </tr>
                        <tr>
                            <td className='w'>Electric hob</td>
                            <td className='x'>{ }</td>
                            <td className='y'>{/*Intentionally empty*/}</td>
                            <td className='z'>{ }</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th>Media / Communication</th>
                            <th>Qty</th>
                            <th>Ventilation</th>
                            <th>Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='w'>Double data point</td>
                            <td className='x'>{ }</td>
                            <td className='y'>Smart Ventilaiton System as per the Meadows Subdivision Resource Consent</td>
                            <td className='z'>{ }</td>
                        </tr>
                        <tr>
                            <td className='w'>Primary T.V. point</td>
                            <td className='x'>{ }</td>
                            <td className='y'>{/*Intentionally empty*/}</td>
                            <td className='z'>{ }</td>
                        </tr>
                        <tr>
                            <td className='w'>Secondary T.V. point</td>
                            <td className='x'>{ }</td>
                            <td className='y'>{/*Intentionally empty*/}</td>
                            <td className='z'>{ }</td>
                        </tr>
                        <tr>
                            <td className='w'>Audio visual communications hub</td>
                            <td className='x'>{ }</td>
                            <td className='y'>{/*Intentionally empty*/}</td>
                            <td className='z'>{ }</td>
                        </tr>
                    </tbody>
                </table>

                <div className='pageFooter'>
                    <div id='hozLine'></div>
                    Initial for Customer:
                    Page 10
                    Initial for Jennian Homes:
                </div>
            </>
        )
    }
}