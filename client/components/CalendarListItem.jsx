import React from 'react'
import {connect} from 'react-redux'

import {delItem} from '../actions'

const CalendarListItem = (props) => (
    <tr>
      <td>{ props.days.date }</td>
      <td>{ props.days.event }</td>
      <td><input type="text" placeholder="Update Event" name="update-event"></input></td>
      <td><button onClick={() => props.dispatch(delItem(props.id, 'events'))}>Remove</button></td>
    </tr>
)

const mapStateToProps = (state) => {
  return {
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(CalendarListItem)
