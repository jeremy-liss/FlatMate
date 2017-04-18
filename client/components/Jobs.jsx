import React from 'react'
import {connect} from 'react-redux'

const Jobs = (props) => {

  return  (
      <tr>
        <td>{props.name}</td>
        <td>{props.chores[props.choreNum]}</td>
      </tr>
    )
}

const mapStateToProps = (state) => {
  return {
    chores: state.shuffleJobs
  }
}

export default connect(mapStateToProps)(Jobs)
