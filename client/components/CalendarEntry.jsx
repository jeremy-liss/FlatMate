import React from 'react'

const CalendarEntry = (props) => (
  <div className='row'>
    <form action='' method='get' id='calendar'>
      <input type='text' palceholder='event'></input><br />
      <button type='submit' form='calendar' value='Submit'>Add Event</button>
    </form>
  </div>
)

export default CalendarEntry
