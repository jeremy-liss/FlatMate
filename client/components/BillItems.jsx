import React from 'react'
import { delAllocation } from '../actions'
import {connect} from 'react-redux'

const BillItems = (props) => {

  let amounts = []
  let userAmount = Math.round((props.amount / props.userNum) * 100) / 100

  for (var i=0; i < props.userNum; i++){
    amounts.push(<td key={i}>${userAmount}</td>)
  }

  function handleBillDel () {
    props.dispatch(delAllocation(props.id, props.table, props.userTotal))
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
