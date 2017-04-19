import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchItems, shuffleJobs, fetchFlatUsers } from '../actions'
import ProfileBar from './ProfileBar'
import Jobs from './Jobs'

const Roster = React.createClass ({

  componentDidMount () {
    this.props.dispatch(fetchFlatUsers())
  },

  render (props) {
    return (
      <div className="container">
        <ProfileBar />
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
              {this.props.flatUsers.map(function(job, i) {
                return <Jobs name={job.name} userId={job.id} key={job.id} choreNum={i} />
              })}
            </tbody>
          </table>
          <div className="shuffle">
            <button onClick={()=> this.props.dispatch(shuffleJobs())}> Shuffle </button>
          </div>
          <Link to='/home'><button>Return Home</button></Link>
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    flatUsers: state.returnFlatUsers,
    dispatch: state.dispatch,
    chores: state.shuffledJobs
  }
}

export default connect(mapStateToProps)(Roster)
