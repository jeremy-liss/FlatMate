import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Bills from './bills/Bills'
import Calendar from './calendar/Calendar'
import DefaultPage from './DefaultPage'
import Main from './Main'
import Register from './Register'
import Roster from './roster/Roster'
import ShoppingList from './shoppinglist/ShoppingList'
import Settings from './settings/Settings'

const App = () => (
  <div className='app'>
    <Router>
      <div>
        <Route exact path='/' component={DefaultPage} />
        <Route path='/home' component={Main} />
        <Route path='/register' component={Register} />
        <Route path='/roster' component={Roster} />
        <Route path='/shoppinglist' component={ShoppingList} />
        <Route path='/bills' component={Bills} />
        <Route path='/calendar' component={Calendar} />
        <Route path='/settings' component={Settings} />
      </div>
    </Router>
  </div>
)

export default App
