import React from 'react'
import { delItem } from '../actions'

const BillItems = (props) => {
  let boxes = []
  for (var i=0; i < props.userNum; i++){
    boxes.push(<td><input type="checkbox" /></td>)
  }
  return (
    <tr>
      <td>{props.details}</td>
      <td>${props.amount}</td>
      {boxes}
      <td>
        <button onClick={() => (delItem(props.id, 'delBill')) }>
          Paid
        </button>
      </td>
    </tr>
  )
}


export default BillItems
