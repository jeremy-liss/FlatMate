import React from 'react'
import {connect} from 'react-redux'

import {fetchItems, postUser, updateEmail, addUserToFlat, fetchFlatUsers} from '../actions'
import SettingItems from './SettingItems'

const Settings = React.createClass ({

  componentDidMount () {
    this.props.dispatch(fetchFlatUsers())
  },

  render (props) {
    return (
      <div className='Settings'>
        <h2>Settings Page</h2>
        <form onSubmit={(ev)=> this.props.dispatch(addUserToFlat(ev))} id='new-user'>
          <input type='text' placeholder='Users Email'></input>
          <button type='submit' form='new-user' value='Submit'>Add Flattie</button>
        </form>
        <table className="settingInfo">
          <thead>
            <tr>
              <th>Flattie</th>
              <th>Email</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.flatUsers.map(users => {
              return <SettingItems users={users} id={users.id} key={users.id} />
            })}
          </tbody>
        </table>
        <a href='#/home'>Return Home</a>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    flatUsers: state.returnFlatUsers,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(Settings)
