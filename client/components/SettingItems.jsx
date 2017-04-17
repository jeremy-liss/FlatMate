import React from 'react'

import {delItem, updateEmail} from '../actions'

const SettingItems = (props) => {
  return (
    <tr>
      <td>{ props.users.name }</td>
      <td>{ props.users.email }</td>
      <td>
        <input type="text" id={props.id} placeholder="New Email"></input>
        <button onClick={() => (updateEmail(props.id, document.getElementById(props.id).value))}>Update</button>
      </td>
      <td><button onClick={() => (delItem(props.id, 'deluser'))}>Remove Flattie</button></td>
    </tr>
  )
}

export default SettingItems
