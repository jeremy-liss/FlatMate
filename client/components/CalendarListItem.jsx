import React from 'react'

const CalendarListItem = (props) => (
    <tr>
      <td>{ props.days.date }</td>
      <td>{ props.days.event }</td>
      <td><input type="text" placeholder="Update Event" name="update-event"></input></td>
      <td><button id={props.id}>Remove</button></td>
    </tr>
)

export default CalendarListItem
