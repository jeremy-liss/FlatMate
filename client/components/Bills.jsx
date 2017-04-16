import React from 'react'
import {connect} from 'react-redux'

import BillUsers from './BillUsers'
import BillItems from './BillItems'
import {fetchItems, postBill, fetchUsers} from '../actions'

const Bills = (props) => {

  props.dispatch(fetchItems('bills'))

  let total = 0
  let userNum = 0

  props.billItems.map(function(bill){
    total += bill.amount
    return total
    })

    props.users.map(function(user, i){
      userNum += i
      return userNum
    })

  return  (

    <div className='container'>

      <table>
        <thead>
          <tr>
            <th>Bill</th>
            <th>Amount</th>
            <th>Paid</th>
            {props.users.map(function(user, i){
              return <BillUsers name={user.name} key={i} id={user.id} />
            })}
          </tr>
        </thead>
        <tbody>
          {props.billItems.map(function(bill, i){
            return <BillItems amount={bill.amount} details={bill.details} key={i} id={bill.id} userNum={userNum} />
          })}
        </tbody>
      </table>

      <h5>Total: ${total}</h5>

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
    users: state.returnUsers,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(Bills)
