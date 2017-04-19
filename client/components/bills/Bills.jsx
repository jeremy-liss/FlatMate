import React from 'react'
import getFormData from 'get-form-data'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchItems, postItem, fetchFlatUsers } from '../../actions'
import { calculateBillAllocation } from '../../lib/billUserTotal'
import BillUsers from './BillUsers'
import BillItems from './BillItems'
import ProfileBar from '../profilebar/ProfileBar'


let table = 'bills'

const Bills = React.createClass ({

  componentDidMount () {
    this.props.dispatch(fetchFlatUsers())
    this.props.dispatch(fetchItems(table))
  },

  handleBillAdd(ev) {
    this.props.dispatch(postItem(getFormData(ev.target), table))
  },

  render () {

    const {userTotal, total, userNum} = calculateBillAllocation(this.props.billItems, this.props.flatUsers)
    return  (
      <div className='container'>
        <ProfileBar />
        <h2>Flat Bills</h2>
        <table className='bills'>
          <thead>
            <tr>
              <th>Bill</th>
              <th>Amount</th>
                {this.props.flatUsers.map(function(user, i){
                 return <BillUsers name={user.name} key={i} />
               })}
              <th>Paid</th>
            </tr>
          </thead>
          <tbody>
            {this.props.billItems.map(function(bill, i){
              return <BillItems amount={bill.amount} details={bill.details} key={i} id={bill.id} userNum={userNum} table={table} />
            })}
          </tbody>
        </table>
        <div className='totalBill'>
          <h5>Total: ${total} | You Owe: ${userTotal}</h5>
          <form onSubmit={(ev)=> this.handleBillAdd(ev)}>
            <input type="text" name="bill" placeholder="bill" />
            <input type="text" name="amount" placeholder="amount" />
            <button type="submit">Add</button>
          </form>
          <Link to='/home'>Return Home</Link>
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    billItems: state.items.bills,
    flatUsers: state.returnFlatUsers
  }
}

export default connect(mapStateToProps)(Bills)
