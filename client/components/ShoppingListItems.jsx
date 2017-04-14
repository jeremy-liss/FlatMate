import React from 'react'
import {connect} from 'react-redux'
import {fetchItems} from '../actions'

import Item from './Item'

function ShoppingListItems (props) {

  props.dispatch(fetchItems())

  return (

    <div className="Shoppinglist">
      {props.shoppingListItems.map(function(item){
        return <Item item={item.item} />
      })}
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    shoppingListItems: state.shoppingListItems,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(ShoppingListItems)
