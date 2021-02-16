import React from 'react'
import moment from 'moment'
import {formatCurrency} from './Utilities/utilities'

export default class SalesDocPage11 extends React.Component {
render(){
    const { id } = this.props.match.params
    const { jobs } = this.props

    let array = jobs
    let idYourLookingFor = id
    let i = array.findIndex(obj => obj.id == idYourLookingFor)

        return(
            <>
                <div className='pageHeader'></div>

                {/*--------- BATHROOM ---------*/}
                <table id='bathroomTable'>
                    <tbody>
                        <tr>
                            <td className='c'>Shower:</td>
                            <td className='d'>{}</td>
                        </tr>
                        <tr>
                            <td className='c'>Vanity:</td>
                            <td className='d'>{}</td>
                        </tr>
                        <tr>
                            <td className='c'>Bath:</td>
                            <td className='d'>{}</td>
                        </tr>
                        <tr>
                            <td className='c'>Shower Mixer:</td>
                            <td className='d'>{}</td>
                        </tr>
                        <tr>
                            <td className='c'>Shower Slide:</td>
                            <td className='d'>{}</td>
                        </tr>
                        <tr>
                            <td className='c'>Basin Mixer:</td>
                            <td className='d'>{}</td>
                        </tr>
                        <tr>
                            <td className='c'>Bath Mixer:</td>
                            <td className='d'>{}</td>
                        </tr>
                        <tr>
                            <td className='c'>Bath Spout:</td>
                            <td className='d'>{}</td>
                        </tr>
                    </tbody>
                </table>

                {/*--------- WC ---------*/}
                <table id='wcTable'>
                    <tbody>
                        <tr>
                            <td className='c'>Toilet:</td>
                            <td className='d'>{}</td>
                        </tr>
                        <tr>
                            <td className='c'>Toilet Roll Holder:</td>
                            <td className='d'>{}</td>
                        </tr>
                    </tbody>
                </table>

                {/*--------- ENSUITE ---------*/}
                <table id='wcTable'>
                    <tbody>
                        <tr>
                            <td className='c'>Shower:</td>
                            <td className='d'>{}</td>
                        </tr>
                        <tr>
                            <td className='c'>Vanity:</td>
                            <td className='d'>{}</td>
                        </tr>
                        <tr>
                            <td className='c'>Shower Mixer:</td>
                            <td className='d'>{}</td>
                        </tr>
                        <tr>
                            <td className='c'>Shower Slide:</td>
                            <td className='d'>{}</td>
                        </tr>
                        <tr>
                            <td className='c'>Basin Mixer:</td>
                            <td className='d'>{}</td>
                        </tr>
                        <tr>
                            <td className='c'>Bath Mixer:</td>
                            <td className='d'>{}</td>
                        </tr>
                        <tr>
                            <td className='c'>Toilet:</td>
                            <td className='d'>{}</td>
                        </tr>
                        <tr>
                            <td className='c'>Toilet Roll Holder:</td>
                            <td className='d'>{}</td>
                        </tr>
                    </tbody>
                </table>

                {/*--------- LAUNDRY ---------*/}
                <table id='wcTable'>
                    <tbody>
                        <tr>
                            <td className='c'>Tub:</td>
                            <td className='d'>{}</td>
                        </tr>
                    </tbody>
                </table>

                {/*--------- KITCHEN ---------*/}
                <table id='kitchenTable'>
                    <tbody>
                        <tr>
                            <td className='c'>Tub:</td>
                            <td className='d'>{}</td>
                        </tr>
                    </tbody>
                </table>
                
                <div className='pageFooter'>
                    <div id='hozLine'></div>
                    Initial for Customer:
                    Page 11  
                    Initial for Jennian Homes:
                </div>
            </>
        )
    }
}