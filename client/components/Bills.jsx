import React from 'react'
import {connect} from 'react-redux'

import BillItems from './BillItems'
import {fetchItems, postBill} from '../actions'

const Bills = (props) => {

  props.dispatch(fetchItems('bills'))
  let total = 0

  props.billItems.map(function(bill){
    total += bill.amount
    return total
    })

  return  (
      <div className='bills'>
        <h1>Bills</h1>

        {props.billItems.map(function(bill, i){
          return <BillItems amount={bill.amount} details={bill.details} key={i} />
        })}
        <div>Total: ${total}</div>

        <form onSubmit={postBill}>
          <input type="text" name="bill" placeholder="bill" />
          <input type="text" name="amount" placeholder="amount" />
          <button type="submit">Add</button>
        </form>

        <a href='#/home'>Return Home</a>
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
