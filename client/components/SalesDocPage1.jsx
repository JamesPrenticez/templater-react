import React from 'react'
import moment from 'moment'
import {formatCurrency} from './Utilities/utilities'

export default class SalesDocPage1 extends React.Component {
render(){
    const { id } = this.props.match.params
    const { jobs } = this.props

    let array = jobs
    let idYourLookingFor = id
    let i = array.findIndex(obj => obj.id == idYourLookingFor)

        return(
            <>
                <div className='pageHeader'></div>
                    <h3 style={{textAlign: 'center'}}>Schedule Of Materials & Works</h3>

                    <table id='mainPageTable'>
                            <tbody>
                                <tr>
                                    <td className='a'>NEW HOME OWNER:</td>
                                    <td className='b'>{jobs[i].jobName}</td>
                                </tr>

                                <tr>
                                    <td className='a'>JOB ADDRESS:</td>
                                    <td className='b'>{jobs[i].jobNumber}</td>
                                </tr>

                                <tr>
                                    <td className='a'>SITE ADDRESS:</td>
                                    <td className='b'>{jobs[i].siteAddress}</td>
                                </tr>

                                <tr>
                                    <td className='a'>DATE:</td>
                                    <td className='b'>{moment().format('D MMM, YYYY')}</td>
                                </tr>

                                <tr>
                                    <td className='a'>HOUSE/TYPE:</td>
                                    <td className='b'>DESIGN/BUILD</td>{/*Need to add this into the database*/}
                                </tr>

                                <tr className='blankRow'>
                                    {/*Empty Line*/}
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td className='a'>RETAIL PRICE</td>
                                    <td className='b'>{formatCurrency(jobs[i].retailPrice)} (Including GST)</td>
                                </tr>

                                <tr>
                                    <td className='a'>CONTRACT PRICE</td>
                                    <td className='b'>{formatCurrency(jobs[i].contractPrice)} (Including GST)</td>
                                </tr>

                                <tr>
                                    <td className='a'>LESS DEPOSIT</td>
                                    <td className='b'>{formatCurrency(jobs[i].deposit)} (Including GST)</td>
                                </tr>

                                <tr>
                                    <td className='a'>BALANCE</td>
                                    <td className='b'>{formatCurrency(jobs[i].contractPrice - jobs[i].deposit)} (Including GST)</td>{/*Need to preform some maths on this*/}
                                </tr>

                                <tr className='blankRow'>
                                    {/*Empty Line*/}
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td className='a'>GROUND FLOOR AREA (GFA):</td>
                                    <td className='b'>{jobs[i].gfa}</td>
                                </tr>
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
                    <h6>CLIENT APPROVAL</h6>
                    <ol>
                        <li>Before you read this contract, it is important that you understand that this document is the basis for building your new home. All previous discussions that you have had with the consultant about various products etc. are now irrelevant as this document represents what you have finally agreed on</li>
                        <li>To ensure that you acknowledge all the aspects of this schedule, we will tick each clause upon your confirmation that you fully understand and for any reason you do not – please ask your consultant to explain</li>
                    </ol>
                </div>

                <div className='contractName'>
                    <h6>CONTRACT NAMES</h6>
                    <ol>
                        <li>Before you read this contract, it is important that you understand that this document is the basis for building your new home. All previous discussions that you have had with the consultant about various products etc. are now irrelevant as this document represents what you have finally agreed on</li>
                        <li>To ensure that you acknowledge all the aspects of this schedule, we will tick each clause upon your confirmation that you fully understand and for any reason you do not – please ask your consultant to explain</li>
                    </ol>
                </div>

                <div className='certificateOfTitle'>
                    <h6>CERTIFICATED OF TITLE</h6>
                    <ol>
                        <li>Before you read this contract, it is important that you understand that this document is the basis for building your new home. All previous discussions that you have had with the consultant about various products etc. are now irrelevant as this document represents what you have finally agreed on</li>
                    </ol>
                </div>

                <div className='pageFooter'>
                    <div id='hozLine'></div>
                    Initial for Customer:
                    Page 1
                    Initial for Jennian Homes:
                </div>
            </>
        )
    }
}