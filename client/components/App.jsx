import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import ShoppingList from './shoppingList'

// App function will need editing
const App = () => (
  <div className='app'>
    <Header />
    <ShoppingList />
  </div>
)

export default App
