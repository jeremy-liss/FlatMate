import React from 'react'
import { delItem } from '../actions'

const BillItems = (props) => {
  return (
    <tr>
      <td>{props.details}</td>
      <td>${props.amount}</td>
      <td>
        <button onClick={() => (delItem(props.id, 'delBill')) }>
          Paid
        </button>
      </td>
    </tr>
  )
}


export default BillItems
