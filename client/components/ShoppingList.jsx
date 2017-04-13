import React from 'react'
import {connect} from 'react-redux'

const ShoppingList = () => (

  <div className="Shoppinglist">
    <h1>Shopping List</h1>
    <form action="/form" method="post">
      Shopping List:
      <input type="text" name="" value="" />
      <button type="add">Add</button>
    </form>
    <a href='#/home'>Return Home</a>
  </div>
)


export default ShoppingList
