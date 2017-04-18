import React from 'react'
import { connect } from 'react-redux'

import { delItem } from '../actions'
import { calculateBillAllocation } from '../lib/billUserTotal'


const BillItems = (props) => {
  let amounts = []
  let userAmount = Math.round((props.amount / props.userNum) * 100) / 100

  for (var i=0; i < props.userNum; i++){
    amounts.push(<td key={i}>${userAmount}</td>)
  }

  function handleBillDel () {
    props.dispatch(delItem(props.id, props.table))
  }

  return (
    <tr>
      <td>{props.details}</td>
      <td>${props.amount}</td>
      {amounts}
      <td>
        <button onClick={()=> handleBillDel()}>
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
