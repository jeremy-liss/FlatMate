import React from 'react'
import {connect} from 'react-redux'

import {fetchItems} from '../actions'
import ShoppingListItems from './ShoppingListItems'

const ShoppingList = (props) => {

  props.dispatch(fetchItems('shopping_list_items'))

  return (
    <div className="Shoppinglist">
      <h1>Shopping List</h1>

        <div>
          {props.list.map(function(item, i){
            return <ShoppingListItems item={item.item} key={i} />
          })}
        </div>

      <form onSubmit={postItem}>
        Shopping List:
        <input type="text" name="item" />
        <button type="submit">Add</button>
      </form>

      <a href='#/home'>Return Home</a>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    list: state.returnItems,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(ShoppingList)
