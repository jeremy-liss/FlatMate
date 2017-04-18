import React from 'react'
import {connect} from 'react-redux'
import getFormData from 'get-form-data'

import BillUsers from './BillUsers'
import BillItems from './BillItems'
import {fetchItems, postItem, postBill, postAllocation, fetchUsers, fetchFlatUsers, fetchBillAllocations, delBill} from '../actions'

let table = 'bills'


const Bills = React.createClass ({
  componentDidMount () {
    this.props.dispatch(fetchItems('bills'))
    this.props.dispatch(fetchItems('billallocations'))
    this.props.dispatch(fetchFlatUsers())
    this.props.dispatch(fetchItems(table))
    this.props.dispatch(fetchUsers())
  },

  handleBillAdd(ev) {
    ev.preventDefault(ev)
    var newAllocation = (Math.round((ev.target.elements.amount.value / this.props.flatUsers.length + this.props.allocations[0].amount) * 100) / 100)
    this.props.dispatch(postAllocation(newAllocation))
    this.props.dispatch(postItem(getFormData(ev.target), table))
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
        <table className='bills'>
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
              return <BillItems amount={bill.amount} details={bill.details} key={i} id={bill.id} userNum={userNum} table={table}/>
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
    flatUsers: state.returnFlatUsers,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(Bills)
