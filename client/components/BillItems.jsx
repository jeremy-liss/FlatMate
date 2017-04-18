import React from 'react'
import { delItem } from '../actions'
import { connect } from 'react-redux'

const BillItems = (props) => {
  let amounts = []
  let userAmount = Math.round((props.amount / props.userNum) * 100) / 100

  for (var i=0; i < props.userNum; i++){
    amounts.push(<td key={i}>${userAmount}</td>)
  }

  return (
    <tr>
      <td><strong>{props.details.charAt(0).toUpperCase() + props.details.slice(1)}</strong></td>
      <td>${props.amount}</td>
      {amounts}
      <td>
        <button onClick={()=> props.dispatch(delItem(props.id, props.table))}>
          Paid
        </button>
      </td>
    </tr>
  )
}

const mapStateToProps = (state) => {
  return {
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(BillItems)
