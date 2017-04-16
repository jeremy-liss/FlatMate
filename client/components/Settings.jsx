import React from 'react'
import {connect} from 'react-redux'

import {fetchItems, postUser} from '../actions'

import SettingItems from './SettingItems'

const Settings = (props) => {

  return (
    <div className='container'>
      <h2>Settings Page</h2>
      Form not ready yet
      <form onSubmit={postUser} id='new-user'>
        <input type='text' placeholder='Search By Email'></input>
        <button type='submit' form='new-user' value='Submit'>Add Flattie</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Flattie</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map(users => {
            return <SettingItems users={users} id={users.id} key={users.id} />
          })}
        </tbody>
      </table>
      <a href='#/home'>Return Home</a>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.returnItems,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(Settings)
