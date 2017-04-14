import React from 'react'
import {connect} from 'react-redux'

import BillItems from './BillItems'
import {fetchItems} from '../actions'

var total = 0
const Bills = (props) => {

  props.dispatch(fetchItems('bills'))
  console.log(props)

  props.billItems.map(function(bill){
    total += bill.amount
    return total
    })

  return  (
      <div className='bills'>
        <h1>Bills</h1>
        {props.billItems.map(function(bill){
          return <BillItems amount={bill.amount} details={bill.details} />
        })}
        <div>Total: ${total}</div>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    billItems: state.returnItems,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(Bills)
