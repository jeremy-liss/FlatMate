import React from 'react'
import {connect} from 'react-redux'
import {fetchItems} from '../actions'

function ShoppingListItems (props) {

  () => dispatch(fetchItems())

  return (

    <div className="Shoppinglist">
      {props.shoppingListItems}
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    shoppingListItems: state.shoppingListItems
  }
}

export default connect(mapStateToProps)(ShoppingListItems)
