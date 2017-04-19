import React from 'react'
import { connect } from 'react-redux'

import { delItem } from '../../actions'

const CalendarListItem = (props) => {

  return (
    <tr>
      <td><strong>{props.days.date}</strong></td>
      <td>{props.days.event}</td>
      <td><input type="text" placeholder="Update Event" name="update-event"></input></td>
      <td><button onClick={() => (confirmDelete(props.id))}>Remove</button></td>
    </tr>
  )

  function confirmDelete (id) {
    var r = confirm('Are you sure you wish to delete this event ?')
    if (r == true) {
      props.dispatch(delItem(props.id, 'events'))
    } else return
  }
}

const mapStateToProps = (state) => {
  return {
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(CalendarListItem)
