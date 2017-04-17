import React from 'react'
import { delItem } from '../actions'
import {connect} from 'react-redux'

const ShoppingListItems = (props) => (

  <div className="Item">
    <div>{props.item} |
      <a href='#/shoppinglist'
        onClick={() => props.dispatch(delItem(props.id, 'shopping_list_items'))}>
        Delete
      </a>
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(ShoppingListItems)
