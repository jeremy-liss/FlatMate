import React from 'react'
import { delItem } from '../actions'

const BillItems = (props) => {
  console.log(props.userNum)
  return (
    <tr>
      <td>{props.details}</td>
      <td>${props.amount}</td>
      <td>
        <button onClick={() => (delItem(props.id, 'delBill')) }>
          Paid
        </button>
      </td>
      <td><input type="checkbox" /></td>
    </tr>
  )
}


export default BillItems
