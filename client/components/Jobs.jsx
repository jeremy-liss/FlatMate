import React from 'react'
import { connect } from 'react-redux'

import { postShuffledJobs } from '../actions'

const Jobs = (props) => {
  props.dispatch(postShuffledJobs(
    {userId: props.userId, job: props.chores[props.choreNum]})
  )

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.chores[props.choreNum]}</td>
    </tr>
  )
}

const mapStateToProps = (state) => {
  return {
    chores: state.shuffledJobs,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(Jobs)
