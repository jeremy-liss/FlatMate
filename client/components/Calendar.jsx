import React from 'react'

import CalendarList from './CalendarList'

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
         Todays date is { todaysDate () } <br></br>
         There are { daysInMonth () } days in this month
       </div>
       <CalendarList month={this.state.month} />
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

function daysInMonth(month, year) {
  var currentDate = new Date()
  var month = currentDate.getMonth() + 1
  var year = currentDate.getFullYear()
  return new Date(year, month, 0).getDate();
}



const april = {
  days: [
    {
      date: '01/04/2017',
      event:'Event1'
    },
    {
      date: '02/04/2017',
      event:'Event1'
    },
    {
      date: '03/04/2017',
      event:''
    },
    {
      date: '04/04/2017',
      event:''
    },
    {
      date: '05/04/2017',
      event:'Event2'
    },
    {
      date: '06/04/2017',
      event:''
    },
    {
      date: '07/04/2017',
      event:''
    },
    {
      date: '08/04/2017',
      event:''
    },
    {
      date: '09/04/2017',
      event:''
    },
    {
      date: '10/04/2017',
      event:'Event3'
    },
    {
      date: '11/04/2017',
      event:'Event3'
    },
    {
      date: '12/04/2017',
      event:'Event3'
    },
    {
      date: '13/04/2017',
      event:''
    },
    {
      date: '14/04/2017',
      event:''
    },
    {
      date: '15/04/2017',
      event:''
    },
    {
      date: '16/04/2017',
      event:''
    },
    {
      date: '17/04/2017',
      event:''
    },
    {
      date: '18/04/2017',
      event:''
    },
    {
      date: '19/04/2017',
      event:''
    },
    {
      date: '20/04/2017',
      event:'Event4'
    },
    {
      date: '21/04/2017',
      event:''
    },
    {
      date: '22/04/2017',
      event:''
    },
    {
      date: '23/04/2017',
      event:''
    },
    {
      date: '24/04/2017',
      event:''
    },
    {
      date: '25/04/2017',
      event:''
    },
    {
      date: '26/04/2017',
      event:'Another Event'
    },
    {
      date: '27/04/2017',
      event:''
    },
    {
      date: '28/04/2017',
      event:''
    },
    {
      date: '29/04/2017',
      event:''
    },
    {
      date: '30/04/2017',
      event:''
    }
  ]
}
