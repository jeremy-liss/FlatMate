import React from 'react'

import CalendarListItem from './CalendarListItem'

const CalendarList = (props) => (
  <div className='container'>
    <table>
      <tr>
        <th>Day</th>
        <th>Event</th>
      </tr>
      <tr>
        <td>Day 1</td>
        <td>{props.days}Event 1</td>
      </tr>
    </table>
    <CalendarListItem />
  </div>
)

export default CalendarList



function daysInMonth(month, year) {
  var currentDate = new Date()
  var month = currentDate.getMonth() + 1
  var year = currentDate.getFullYear()
  return new Date(year, month, 0).getDate();
}
