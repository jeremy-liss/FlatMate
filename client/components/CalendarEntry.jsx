import React from 'react'

const CalendarEntry = (props) => (
  <div className='row'>
    <form action='#/calendar' id='calendar'>
      <input type='text' placeholder='New Event'></input>
      <input type='date' name='event' min='{ todaysDate () }'></input>
      <button type='submit' form='calendar' value='Submit'>Add Event</button>
    </form>
  </div>
)

function todaysDate () {
  var currentDate = new Date()
  var day = currentDate.getDate()
  var month = currentDate.getMonth() + 1
  var year = currentDate.getFullYear()
  return (year + "-" + month + "-" + day)
}

export default CalendarEntry
