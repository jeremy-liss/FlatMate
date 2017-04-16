import React from 'react'
import {connect} from 'react-redux'

import {fetchItems} from '../actions'
import CalendarEntry from './CalendarEntry'
import CalendarList from './CalendarList'

const Events = (props) => {

  props.dispatch(fetchItems('events'))

  if (props.events[0] != undefined) {
    props.events.map((day, i) => {
      props.events[i].event = day.event.charAt(0).toUpperCase() + day.event.slice(1)
      props.events[i].date = day.date.split('').filter(removeDash).join('')
    })

    props.events.map((day, i) => {
      while (props.events.length > i) {
        if (props.events[i].date < todaysDate()) {
        props.events.splice(i, 1)
        } else i++
      }})

    props.events.sort((a, b) => {
      return a.date - b.date
    })

    props.events.map((day, i) => {
      let a = day.date.split('')
      let rearranged = [a[6],a[7],"-",a[4],a[5],"-",a[0],a[1],a[2],a[3]]
      let joinedArray = rearranged.join('')
      props.events[i].date = joinedArray
    })
  }

  return (
    <div className='container'>
      <div className='row'>
        <h3>Upcoming Events</h3>
        Today is the { easyToReadDate () }
        <CalendarEntry />
      </div>
      <div className="row">
        <CalendarList days={props.events} />
        <a href='#/home'>Return Home</a>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    events: state.returnItems,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(Events)

function removeDash (value) {
  if (value !== "-") return value
}

function futureDates (date) {
  return date > todaysDate()
}

function todaysDate () {
  var currentDate = new Date()
  var day = currentDate.getDate()
  var month = currentDate.getMonth() + 1
  var year = currentDate.getFullYear()
  if (day < 10) {
    day = "0" + day
  }
  if (month < 10) {
    month = "0" + month
  }
  return [year, month, day].join('')
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
