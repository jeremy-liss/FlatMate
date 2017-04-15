import React from 'react'

import {postEvent} from '../actions'

var today = new Date()
var dd = today.getDate()
var mm = today.getMonth()+1 //January is 0!
var yyyy = today.getFullYear()
if(dd < 10){dd ='0'+dd}
if(mm < 10){mm ='0'+mm}
today = yyyy+'-'+mm+'-'+dd

const CalendarEntry = (props) => (
  <div className='row'>
    <form onSubmit={postEvent} id='calendar'>
      <input type='text' placeholder='New Event'></input>
      <input type='date' id='datefield' min={today}></input>
      <button type='submit' form='calendar' value='Submit'>Add Event</button>
    </form>
  </div>
)


export default CalendarEntry
