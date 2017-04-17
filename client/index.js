import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'

import {fetchItems, fetchUsers, fetchBillAllocations} from './actions'
import reducers from './reducers'
import App from './components/App'

let store = createStore(reducers, compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

document.addEventListener('DOMContentLoaded', () => {

  store.dispatch(fetchItems('users'))
  store.dispatch(fetchItems('roster'))
  store.dispatch(fetchItems('events'))
  store.dispatch(fetchUsers())
  store.dispatch(fetchBillAllocations())


  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
