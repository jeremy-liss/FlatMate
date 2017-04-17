import React from 'react'
import {connect} from 'react-redux'

import {postItem} from '../actions'

var today = new Date()
var dd = today.getDate()
var mm = today.getMonth()+1 //January is 0!
var yyyy = today.getFullYear()
if(dd < 10){dd ='0'+dd}
if(mm < 10){mm ='0'+mm}
today = yyyy+'-'+mm+'-'+dd

const CalendarEntry = (props) => {

  function handleEventAdd(ev) {
    ev.preventDefault(ev)
    props.dispatch(postItem({date: ev.target.elements[1].value, event: ev.target.elements[0].value}, 'events'))
  }

  return (
    <div className='row'>
      <form onSubmit={(ev)=> handleEventAdd(ev)} id='calendar'>
        <input type='text' placeholder='New Event'></input>
        <input type='date' id='datefield' min={today}></input>
        <button type='submit' form='calendar' value='Submit'>Add Event</button>
      </form>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(CalendarEntry)
