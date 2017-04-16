import React from 'react'

const SettingItems = (props) => (
    <tr>
      <td>{ props.users.name }</td>
      <td>{ props.users.email }</td>
      <td><input type="text" placeholder="Update Email" name="update-email"></input></td>
      <td><button onClick={() => (deleteUser(props.id))}>Remove Flattie</button></td>
    </tr>
)

export default SettingItems
