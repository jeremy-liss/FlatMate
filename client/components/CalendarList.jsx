import React from 'react'

const CalendarList = (props) => (
  <div className='container'>
    <table>
      <tr>
        <th>Day</th>
        <th>Event</th>
      </tr>
      <tr>
        <td>Day 1{props.id}</td>
        <td>Event 1{props.event}</td>
      </tr>
    </table>
  </div>
)

export default CalendarList
