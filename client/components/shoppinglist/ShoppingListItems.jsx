import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { delItem } from '../../actions'

const ShoppingListItems = (props) => (

  <div className="Item">
    <div>
      <strong>{props.item.charAt(0).toUpperCase() + props.item.slice(1)}</strong> -
      <Link to='/shoppinglist' onClick={() => props.dispatch(delItem(props.id, props.table))}><button>Delete</button></Link>
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(ShoppingListItems)
