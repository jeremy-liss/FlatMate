import React from 'react'
import {connect} from 'react-redux'
import {fetchItems} from '../actions'
import Jobs from './Jobs'

const Roster = (props) => {

  props.dispatch(fetchItems('roster'))

  return (
    <div className='job'>
      <h2>Duty Calls</h2>
        <table>
         <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
         </thead>
        <tbody>
          {props.roster.map(function(job, i){
          return <Jobs name={job.name} job={job.job} key={i} />
          })}
        </tbody>
        <th><button type='shuffle' value='Shuffle'>Shuffle</button></th>
        </table>
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
