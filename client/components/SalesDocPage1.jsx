import React from 'react'
import moment from 'moment'

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
                    <h1>Schedule Of Materials & Works</h1>

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

                                <tr>{/*Empty Line*/}</tr>

                                <tr>
                                    <td className='a'>RETAIL PRICE</td>
                                    <td className='b'>{jobs[i].cost}</td>
                                </tr>
                                <tr>
                                    <td className='a'>CONTRACT PRICE</td>
                                    <td className='b'>{jobs[i].cost}</td>
                                </tr>
                                <tr>
                                    <td className='a'>LESS DEPOSIT</td>
                                    <td className='b'>$5000</td>
                                </tr>
                                <tr>
                                    <td className='a'>BALANCE</td>
                                    <td className='b'>{jobs[i].cost} - 5000 </td>
                                </tr>

                            </tbody>
                        </table>


                <div className='pageFooter'>
                    <div id='hozLine'></div>
                    Page 1
                </div>
            </>
        )
    }
}