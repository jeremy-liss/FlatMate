import React from 'react'

import Header from './Header'
import ShoppingList from './shoppingList'
import Main from './Main'
import Roster from './Roster'
import Calendar from './Calendar'
import DefaultPage from './DefaultPage'


// App function will need editing
const App = () => (

  <div className='app'>
    <Header />
    <ShoppingList />
    <Main />
    <Roster />
  </div>
)

export default App
