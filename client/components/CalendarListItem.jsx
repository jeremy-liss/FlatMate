import React from 'react'

import {deleteEvent} from '../actions'

const CalendarListItem = (props) => (
  <div className='items'>
    <tr>
      <td>{ props.days.date }</td>
      <td>{ props.days.event }</td>
      <td><button onClick={() => (confirmDelete(props.id))}>Remove</button></td>
    </tr>
  </div>
)

function confirmDelete (id) {
  var r = confirm('Are you sure you wish to delete this event ?')
  if (r == true) {
    deleteEvent(id)
  } else return
}

export default CalendarListItem
