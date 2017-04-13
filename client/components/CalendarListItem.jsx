import React from 'react'

const CalendarListItem = (props) => (
    <tr>
      <td>{ props.days.date }</td>
      <td>{ props.days.event }</td>
    </tr>
)

export default CalendarListItem
