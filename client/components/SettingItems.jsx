import React from 'react'

import {delItem, updateEmail} from '../actions'

const SettingItems = (props) => (
    <tr>
      <td>{ props.users.name }</td>
      <td>{ props.users.email }</td>
      <td><form onSubmit={updateEmail(props.users.email, )} id='updateEmail'></form>
            <input type="text" placeholder="Update Email"></input>
            <button type='submit' form='updateEmail' value='Submit'>Update</button>
          </form>
      </td>
      <td><button onClick={() => (delItem(props.id, 'deluser'))}>Remove Flattie</button></td>
    </tr>
)

export default SettingItems
