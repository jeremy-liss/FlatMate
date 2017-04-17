import React from 'react'
import {connect} from 'react-redux'
import getFormData from 'get-form-data'

import {fetchItems, postItem} from '../actions'
import ShoppingListItems from './ShoppingListItems'

const ShoppingList = React.createClass ({

  componentDidMount () {
    this.props.dispatch(fetchItems('shopping_list_items'))
  },

  handleItemAdd(ev) {
    ev.preventDefault(ev)
    this.props.dispatch(postItem(ev.target.elements[0].value))
  },

  delItem(id){
   this.props.dispatch(delItem(id))
 },

  render () {

    return (
      <div className="Shoppinglist">
        <h1>Shopping List</h1>

          <div>
            {this.props.list.map(function(item, i){
              return <ShoppingListItems item={item.item} key={i} id={item.id} />
            })}
          </div>

        <form onSubmit={(ev)=> this.handleItemAdd(ev)}>
          <input type="text" name="item" placeholder="add item" />
          <button type="submit">Add</button>
        </form>

        <a href='#/home'>Return Home</a>
      </div>
    )
  }
})


const mapStateToProps = (state) => {
  return {
    list: state.returnItems,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(ShoppingList)
