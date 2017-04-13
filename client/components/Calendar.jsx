import React from 'react'

import CalendarList from './CalendarList'


const april = {
  days: [
    {id: 9001, date: '01/04/2017', event:'Wow'},
    {id: 9002, date: '08/04/2017', event:'Cool'},
    {id: 9003, date: '23/04/2017', event:'Awesome'}
  ]
}

export default React.createClass ({
  getInitialState () {
    return {
      month: april
    }
  },

  render () {
    return (
      <div className='container'>
       <h2>Calendar</h2>
       <div className='calendar'>
         Todays date: { todaysDate () }
       </div>
       <CalendarList days={this.state.month.days} />
       <a href='#/home'>Return Home</a>
      </div>
    )
  }}
)


function todaysDate () {
  var currentDate = new Date()
  var day = currentDate.getDate()
  var month = currentDate.getMonth() + 1
  var year = currentDate.getFullYear()
  return (day + "/" + month + "/" + year)
}
