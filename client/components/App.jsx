import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Calendar from './Calendar'
import DefaultPage from './DefaultPage'
import Header from './Header'
import Main from './Main'
import Register from './Register'
import Roster from './Roster'
import ShoppingList from './ShoppingList'
import Bills from './Bills'

// App function will need editing
const App = () => (

  <div className='app'>
    <Header />
    <Router>
      <div>
        <Route exact path='/home' component={Main} />
        <Route path='/' component={DefaultPage} />
        <Route path='/register' component={Register} />
        <Route path='/roster' component={Roster} />
        <Route path='/shoppinglist' component={ShoppingList} />
        <Route path='/bills' component={Bills} />
      </div>
    </Router>
  </div>
)

export default App
