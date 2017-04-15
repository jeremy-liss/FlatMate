import React from 'react'
import {connect} from 'react-redux'
import {fetchItems} from '../actions/index'
import {shuffleJobs} from '../actions/Shuffle_jobs'
import Jobs from './Jobs'

const Roster = (props) => {

let Chores = ["Vacuum", "Dishes", "Trash"]

Chores = Chores.sort(function(a,b) {
    return 0.5 - Math.random()
  })



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
          {props.roster.map(function(job,i){
          return <Jobs name={job.name} key={job.id} chores={Chores[i]} />
          })}
        </tbody>
        <button onClick={props.chores}>Shuffle</button>
        </table>
      <a href='#/home'>Return Home</a>
    </div>
  )
}
        // <th><button onClick={jobShuffle} value='Shuffle'>Shuffle</button></th>


const mapStateToProps = (state) => {
  return {
    roster: state.returnItems,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(Roster)
