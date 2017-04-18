import React from 'react'
import {connect} from 'react-redux'
import {fetchItems, shuffleJobs, fetchFlatUsers} from '../actions'
import Jobs from './Jobs'

const Roster = React.createClass ({

  componentDidMount () {
    this.props.dispatch(fetchFlatUsers())
  },

  render (props) {

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
            {this.props.flatUsers.map(function(job, i){
              return <Jobs name={job.name} key={job.id} choreNum={i} />
            })}

          </tbody>
        </table>
        <div className="shuffle">
          <button onClick={()=> this.props.dispatch(shuffleJobs())}> Shuffle </button>
        </div>

        <a href='#/home'>Return Home</a>
      </div>

    )
  }

})

const mapStateToProps = (state) => {
  return {
    flatUsers: state.returnFlatUsers,
    dispatch: state.dispatch,
    chores: state.shuffleJobs
  }
}

export default connect(mapStateToProps)(Roster)
