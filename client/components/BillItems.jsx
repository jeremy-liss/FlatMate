import React from 'react'
import { delItem } from '../actions'

const BillItems = (props) => {
  let boxes = []
  let userAmount = Math.round((props.amount / props.userNum) * 100) / 100

  for (var i=0; i < props.userNum; i++){
    boxes.push(<td key={i}>{userAmount} |
                <input id="box" type="checkbox" value='true'
                  onClick={function() {
                            if (box.value == 'true')
                            console.log('hi')
                          }
                        }/>
              </td>)
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
