import React from 'react'
import {connect} from 'react-redux'

const ShoppingList = () => (

  <div>
    <h1>Shopping List</h1>
      <form action="/form" method="post">
        Shopping List:
      <input type="text" name="" value="" />
      <button type="add">Add</button>
      </form>
  </div>
)


export default ShoppingList
