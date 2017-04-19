import React from 'react'
import { connect } from 'react-redux'

import { removeFlattie, updateEmail } from '../../actions'

const SettingItems = (props) => {
  return (
    <tr>
      <td><strong>{props.users.name}</strong></td>
      <td>{props.users.email}</td>
      <td>
        <input type="text" id={props.id} placeholder="New Email"></input>
        <button onClick={() => props.dispatch(updateEmail(props.id, document.getElementById(props.id).value))}>Update</button>
      </td>
      <td><button onClick={() => props.dispatch(removeFlattie(props.users.email))}>Remove Flattie</button></td>
    </tr>
  )
}

const mapStateToProps = (state) => {
  return {
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(SettingItems)
