import React from 'react'
import {connect} from 'react-redux'
import {fetchItems, shuffleJobs} from '../actions'
import Jobs from './Jobs'

const Roster = (props) => {
  return (
    <div className="roster">

      <h2>Duty Calls</h2>

        <table className="center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job this Week</th>
              </tr>
           </thead>
           <tbody>
            {props.roster.map(function(job,i){

            return <Jobs name={job.name} key={job.id} chores={props.chores[i]} />
            })}

           </tbody>
        </table>
          <div className="shuffle">
            <button onClick={()=> props.dispatch(shuffleJobs())}> Shuffle </button>
          </div>

        <a href='#/home'>Return Home</a>
        </div>

  )
}

const mapStateToProps = (state) => {
  return {
    roster: state.returnItems,
    dispatch: state.dispatch,
    chores: state.shuffleJobs
  }
}

export default connect(mapStateToProps)(Roster)
