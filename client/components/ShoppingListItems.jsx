import React from 'react'
import { delItem } from '../actions'

const ShoppingListItems = (props) =>
 (

  <div className="Item">
    <div>{props.item} |
      <a href='#/shoppinglist'
        onClick={() => (delItem(props.id, 'delShoppingListItem'))}>
        Delete
      </a>
    </div>
  </div>
)

export default ShoppingListItems
