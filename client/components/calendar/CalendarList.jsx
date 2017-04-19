import React from 'react'

import CalendarListItem from './CalendarListItem'

const CalendarList = (props) => (
  <div className='container'>
    <table className= 'calendar'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Event</th>
          <th>Delete</th>
          <th></th>
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
