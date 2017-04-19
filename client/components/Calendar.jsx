import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchItems } from '../actions'

import CalendarEntry from './CalendarEntry'
import CalendarList from './CalendarList'
import ProfileBar from './ProfileBar'

const Events = React.createClass ({

  componentDidMount () {
    this.props.dispatch(fetchItems('events'))

  },

  render () {
    if (this.props.events[0] != undefined) {
      this.props.events.map((day, i) => {
        this.props.events[i].event = day.event.charAt(0).toUpperCase() + day.event.slice(1)
        this.props.events[i].date = day.date.split('').filter(removeDash).join('')
      })

      this.props.events.map((day, i) => {
        while (this.props.events.length > i) {
          if (this.props.events[i].date < todaysDate()) {
            this.props.events.splice(i, 1)
          } else i++
      }})

      this.props.events.sort((a, b) => {
        return a.date - b.date
      })

      this.props.events.map((day, i) => {
        let a = day.date.split('')
        let rearranged = [a[6],a[7],"-",a[4],a[5],"-",a[0],a[1],a[2],a[3]]
        let joinedArray = rearranged.join('')
        this.props.events[i].date = joinedArray
      })
    }

    return (
      <div className='container'>
        <ProfileBar />
        <div className='calendarContainer'>
          <div className='row'>
            <h3>Upcoming Events</h3>
            Today is the { easyToReadDate () }
            <CalendarEntry />
          </div>
          <div className="row">
            <CalendarList days={this.props.events} />
            <Link to='/home'>Return Home</Link>
          </div>
        </div>
      </div>
    )
  }
})


const mapStateToProps = (state) => {
  return {
    events: state.items.events,
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
