import React from 'react'

import CalendarListItem from './CalendarListItem'

const CalendarList = (props) => (
  <div className='container'>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Event</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.days.map(days => {
          return <CalendarListItem days={days} id={days.id} key={days.id} />
        })}
      </tbody>
    </table>
  </div>
)

export default CalendarList

function todaysDate () {
  var currentDate = new Date()
  var day = currentDate.getDate()
  var month = currentDate.getMonth() + 1
  var year = currentDate.getFullYear()
  return (day + "/" + month + "/" + year)
}

function daysInMonth (month, year) {
  var currentDate = new Date()
  var month = currentDate.getMonth() + 1
  var year = currentDate.getFullYear()
  return new Date(year, month, 0).getDate();
}
