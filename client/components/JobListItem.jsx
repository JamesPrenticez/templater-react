import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link, useParams, useHistory, Redirect } from "react-router-dom";

import moment from 'moment'

class JobListItem extends React.Component {
    state = {
        toJobView: false,
    }

    redirectToJobView = () => {
        this.setState(() => ({
            toJobView: true
        }))
    }

    render() {
        const { job } = this.props
          console.log(job.id)
        
        if (this.state.toJobView === true) {
            return <Redirect to={`/job_view/${job.id}`} />
        }

        return (
            <>

                <tr onClick={this.redirectToJobView}>
                    <td>
                        {job.id}
                    </td>
                    <td>
                        {job.jobName}
                    </td>
                    <td>
                        {job.jobNumber}
                    </td>
                    <td>
                        {job.collection}
                    </td>
                    <td>
                        {job.cost}
                    </td>
                    <td>
                        {job.gfa}
                    </td>
                    <td>
                        {moment.unix(job.dateCreated / 1000).format('MMM YY')}
                    </td>
                 </tr>

            </>
        )
    }
}

export default connect()(JobListItem)