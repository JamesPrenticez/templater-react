import React from 'react'
import moment from 'moment'
import {formatCurrency} from './Utilities/utilities'

export default class SalesDocPage4 extends React.Component {
render(){
    const { id } = this.props.match.params
    const { jobs } = this.props

    let array = jobs
    let idYourLookingFor = id
    let i = array.findIndex(obj => obj.id == idYourLookingFor)

        return(
            <>
                <div className='pageHeader'></div>

                <table id='mainPageTable'>
                        <tbody>
                                <tr>
                                <td className='a'>HOME CONSULTANT:</td>
                                <td className='b'>{jobs[i].salesPerson}</td>
                            </tr>

                            <tr className='blankRow'>
                                {/*Empty Line*/}
                                <td></td>
                                <td></td>
                            </tr>

                        </tbody>
                </table>

                <div className='clientAppoval'>
                    <h6>x</h6>
                    <ol>
                        <li></li>
                    </ol>
                </div>

                <div className='pageFooter'>
                    <div id='hozLine'></div>
                    Initial for Customer:
                    Page 3
                    Initial for Jennian Homes:
                </div>
            </>
        )
    }
}