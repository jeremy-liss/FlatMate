import React from 'react'
import {connect} from 'react-redux'

import {fetchItems, fetchBillAllocations} from '../actions'
import ProfileBarUser from './ProfileBarUser'
import ProfileBarJob from './ProfileBarJob'
import ProfileBarBill from './ProfileBarBill'

const ProfileBar = React.createClass ({

  componentDidMount () {
    this.props.dispatch(fetchItems('users'))
    this.props.dispatch(fetchItems('jobs'))
    this.props.dispatch(fetchBillAllocations())
  },

  render () {

    return (
    <div className="ProfileBar">
      Hello
      {this.props.users.map(function(user, i) {
        if (user.id == 2002) {
          return <ProfileBarUser name={user.name} id={user.id} key={i} />
        }
      })}
      ! | Your job this week is:
      {this.props.jobs.map(function(job, i) {
        if (job.user_id == 2002) {
          return <ProfileBarJob job={job.job} id={job.id} key={i} />
        }
      })}
      | Current amount owing $
      {this.props.allocations.map(function(amount, i) {
        if (amount.user_id == 2002) {
          return <ProfileBarBill amount={amount.amount} id={amount.id} key={i} />
        }
      })}
    </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    users: state.returnUsers,
    allocations: state.returnAllocations,
    jobs: state.returnItems,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(ProfileBar)
