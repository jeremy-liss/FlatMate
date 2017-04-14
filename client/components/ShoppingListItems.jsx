import React from 'react'
import {connect} from 'react-redux'

import {fetchItems} from '../actions'
import Item from './Item'

function ShoppingListItems (props) {

  props.dispatch(fetchItems('shopping_list_items'))

  return (

    <div className="Shoppinglist">
      {props.shoppingListItems.map(function(item, i){
        return <Item item={item.item} key={i} />
      })}
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    shoppingListItems: state.returnItems,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(ShoppingListItems)
