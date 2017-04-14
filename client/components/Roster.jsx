import React from 'react'
import {connect} from 'react-redux'

import {fetchItems} from '../actions'
import Jobs from './Jobs'

const Roster = (props) => {

  props.dispatch(fetchItems('roster'))

  return (
    <div>
      <h2>Duty Calls</h2>
      {props.roster.map(function(job, i){
        return <Jobs name={job.name} job={job.job} key={i} />
      })}
      <a href='#/home'>Return Home</a>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    roster: state.returnItems,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(Roster)
