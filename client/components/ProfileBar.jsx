import React from 'react'
import {connect} from 'react-redux'

import {fetchItems} from '../actions'

const ProfileBar = (props) => {
  props.dispatch(fetchItems('users'))
  props.dispatch(fetchItems('jobs'))


  return (
  <div className="ProfileBar">
   Hello {props.users[1]}! |

   Your job this week is: ... |

   You owe $0
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.returnUsers,
    allocations: state.returnAllocations,
    jobs: state.returnItems,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(ProfileBar)
