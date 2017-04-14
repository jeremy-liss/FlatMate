import React from 'react'

const BillItems = (props) => (

  <div className='bill-items'>
     {props.details}: ${props.amount}
  </div>
)

export default BillItems
