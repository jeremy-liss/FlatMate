import React from 'react'
import {connect} from 'react-redux'

import {fetchItems} from '../actions'
import CalendarEntry from './CalendarEntry'
import CalendarList from './CalendarList'

const Events = (props) => {

  return (
    <div className='container'>
      <div className='row'>
        <h3>Event Calendar</h3>
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
