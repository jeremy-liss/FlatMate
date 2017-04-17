import React from 'react'
import {connect} from 'react-redux'
import getFormData from 'get-form-data'

import BillUsers from './BillUsers'
import BillItems from './BillItems'
import {fetchItems, postBill, fetchUsers, fetchBillAllocations, delBill} from '../actions'

const Bills = React.createClass ({

  componentDidMount () {
    this.props.dispatch(fetchItems('bills'))
  },

  handleBillAdd(ev) {
    ev.preventDefault(ev)
    this.props.dispatch(postBill(getFormData(ev.target)))
  },

   delBill(id){
    this.props.dispatch(delBill(id))
  },

  render () {


    let total = 0
    let userNum = 0
    this.props.billItems.map(function(bill){
      total += bill.amount
      return total
    })

    this.props.users.map(function(user, i){
      userNum += i
      return userNum
    })

    let userTotal= Math.round((total/ userNum) * 100) / 100

    return  (

      <div className='container'>

        <table>
          <thead>
            <tr>
              <th>Bill</th>
              <th>Amount</th>
              {this.props.users.map(function(user, i){
                return <BillUsers name={user.name} key={i} id={user.id} />
              })}
              <th>Paid</th>
            </tr>
          </thead>
          <tbody>
            {this.props.billItems.map(function(bill, i){
              return <BillItems amount={bill.amount} details={bill.details} key={i} id={bill.id} userNum={userNum} />
            })}
          </tbody>
        </table>

        <h5>Total: ${total} | You Owe: ${userTotal}</h5>

        <form onSubmit={(ev)=> this.handleBillAdd(ev)}>
          <input type="text" name="bill" placeholder="bill" />
          <input type="text" name="amount" placeholder="amount" />
          <button type="submit">Add</button>
        </form>

        <a href='#/home'>Return Home</a>

      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    billItems: state.returnItems,
    users: state.returnUsers,
    allocations: state.returnAllocations,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(Bills)
