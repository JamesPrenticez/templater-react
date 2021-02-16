import React from 'react'
import moment from 'moment'
import {formatCurrency} from './Utilities/utilities'

export default class SalesDocPage7 extends React.Component {
render(){
    const { id } = this.props.match.params
    const { jobs } = this.props

    let array = jobs
    let idYourLookingFor = id
    let i = array.findIndex(obj => obj.id == idYourLookingFor)

        return(
            <>
                <div className='pageHeader'></div>

                <div className='interiorDoors'>
                    <h6>INTERIOR DOORS</h6>
                    <ol>
                        <li>All doors shall be hollow core MDF flush panel paint grade 1980mm high</li>
                        <li>Door jambs shall be HAG 11 paint grade</li>
                        <li>Door jambs shall be pine clears paint grade to the ensuite and bathroom </li>
                        <li>All the interior door handles shall be Windsor Corbel lever handles</li>
                        <li>Windsor 9034 privacy locks will be fitted to the WC, ensuite and bathroom only </li>
                        <li>Skirting mounted Windsor 5240 door stops to all doors</li>
                        <li>Finish to be Brushed Nickel</li>
                    </ol>
                    <div className='salesImages'></div>
                    <div className='salesImages'></div>
                    <div className='salesImages'></div>
                    <div className='salesImages'></div>
                </div>

                <div className='wardrobes'>
                    <h6>WARDROBES</h6>
                    <ol>
                        <li>Wardrobe joinery (value $2,524.25)</li>
                        <li>Master bedroom – Melamine shelves, full and double hang walk in wardrobe system 1800mm x 1620mm</li>
                        <li>Bedroom 2 & 3 – Melamine single shelf and pole system 1900mm</li>
                        <li>Bedroom 4 – Melamine single shelf and pole system 1400mm</li>
                        <li>Laundry – Melamine set of four shelves 900mm wide x 450mm deep</li>
                    </ol>
                    <div className='salesImages'></div>
                    <div className='salesImages'></div>
                    <div className='salesImages'></div>
                </div>

                <div className='ceilingAccess'>
                    <h6>CEILING ACCESS & ATTIC STORAGE</h6>
                    <ol>
                        <li>Shall include a standard ceiling access panel located in the garage to provide access to the roof space</li>
                        <li>No allowance has been made for an attic storage space</li>
                    </ol>
                    <div className='salesImages'></div>
                </div>

                <div className='pageFooter'>
                    <div id='hozLine'></div>
                    Initial for Customer:
                    Page 7  
                    Initial for Jennian Homes:
                </div>
            </>
        )
    }
}