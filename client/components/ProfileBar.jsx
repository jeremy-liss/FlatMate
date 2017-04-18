import React from 'react'
import { connect } from 'react-redux'

import { fetchItems } from '../actions'
import { calculateBillAllocation } from '../lib/billUserTotal'

import ProfileBarUser from './ProfileBarUser'
import ProfileBarJob from './ProfileBarJob'
import ProfileBarBill from './ProfileBarBill'

const ProfileBar = React.createClass ({

  componentDidMount () {
    this.props.dispatch(fetchItems('users'))
    this.props.dispatch(fetchItems('jobs'))
    this.props.dispatch(fetchItems('bills'))
  },

  render () {
    const {userTotal} = calculateBillAllocation(this.props.billItems, this.props.users)
    const job = getJob(this.props.jobs)
    const name = getName(this.props.users)

    return (
      <div className="ProfileBar">
       Hello {name}! |
       Your job this week is: <ProfileBarJob job={job.job} id={job.id} /> |
        Current amount owing ${userTotal}
      </div>
    )
  }
})
function getName(users) {
  if (!users || users.length < 1) return ''
  return users.filter(function(user, i) {
    return user.id == 2002
  })[0].name
}

function getJob(jobs) {
  if (!jobs || jobs.length < 1) return {}
  return jobs.filter(function(job, i){
    return job.user_id == 2002
  })[0]
}

const mapStateToProps = (state) => {
  return {
    users: state.returnUsers,
    billItems: state.returnItems.bills,
    jobs: state.returnItems.jobs,
  }
}

export default connect(mapStateToProps)(ProfileBar)
