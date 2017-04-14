import React from 'react'

import CalendarEntry from './CalendarEntry'
import CalendarList from './CalendarList'

let events = {
  days: [
    {id: 9001, flat_id:1001, date: '2017-04-21', event:'Wow'},
    {id: 9002, flat_id:1001, date: '2017-05-29', event:'Cool'},
    {id: 9003, flat_id:1001, date: '2017-05-01', event:'Awesome'}
  ]
}

events.days.map(function(day, i) {
  events.days[i].date = day.date.split('').filter(removeDash).join('')
})

function removeDash (value) {
  if (value !== "-") return value
}

events.days.sort(function (a, b) {
  return a.date - b.date
})

events.days.map(function(day, i) {
  let a = day.date.split('')
  let rearranged = [a[6],a[7],"-",a[4],a[5],"-",a[0],a[1],a[2],a[3]]
  let joinedArray = rearranged.join('')
  events.days[i].date = joinedArray
})

export default React.createClass ({
  getInitialState () {
    return {
      month: events
    }
  },

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <h2>Calendar</h2>
          Today is the { easyToReadDate () }
          <CalendarEntry />
        </div>
        <div className="row">
          <CalendarList days={this.state.month.days} />
          <a href='#/home'>Return Home</a>
        </div>
      </div>
    )
  }}
)

function todaysDate () {
  var currentDate = new Date()
  var day = currentDate.getDate()
  var month = currentDate.getMonth() + 1
  var year = currentDate.getFullYear()
  return (year + "-" + month + "-" + day)
}

function easyToReadDate () {
  var currentDate = new Date()
  var day = currentDate.getDate()
  var month = currentDate.getMonth() + 1
  var year = currentDate.getFullYear()

  if (day == 1) {
    day = '1st'
  } else if (day == 2) {
    day = '2nd'
  } else if (day == 3) {
    day = '3rd'
  } else if (day == 21) {
    day = '21st'
  } else if (day == 22) {
    day = '22nd'
  } else if (day == 23) {
    day = '23rd'
  } else if (day == 31) {
    day = '31st'
  } else day = day + 'th'

  if (month == 1) {
    month = "January"
  } else if (month == 2) {
    month = "February"
  } else if (month == 3) {
    month = "March"
  } else if (month == 4) {
    month = "April"
  } else if (month == 5) {
    month = "May"
  } else if (month == 6) {
    month = "June"
  } else if (month == 7) {
    month = "July"
  } else if (month == 8) {
    month = "August"
  } else if (month == 9) {
    month = "September"
  } else if (month == 10) {
    month = "October"
  } else if (month == 11) {
    month = "November"
  } else if (month == 12) {
    month = "December"
  }
  return (day + " of " + month + " " + year)
}
