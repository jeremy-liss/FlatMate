import React from 'react'
import getFormData from 'get-form-data'
import { connect } from 'react-redux'

import { fetchItems, postItem } from '../../actions'
import ShoppingListItems from './ShoppingListItems'
import ProfileBar from '../profilebar/ProfileBar'

let table ='shopping_list_items'

const ShoppingList = React.createClass ({

  componentDidMount () {
    this.props.dispatch(fetchItems(table))
  },

  handleItemAdd(ev) {
    ev.preventDefault(ev)
    this.props.dispatch(postItem({item: ev.target.elements[0].value}, table))
  },

  render () {

    return (
      <div className="container">
        <ProfileBar />
        <div className="Shoppinglist">
          <h1>Shopping List</h1>
          <div>
            {this.props.list.map(function(item, i){
              return <ShoppingListItems item={item.item} key={i} id={item.id} table={table} />
            })}
          </div>
          <form onSubmit={(ev)=> this.handleItemAdd(ev)}>
            <input type="text" name="item" placeholder="Add Item" />
            <button type="submit">Add</button>
          </form>
          <a href='#/home'>Return Home</a>
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    list: state.items.shopping_list_items,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(ShoppingList)
