import React from 'react'

import Main from './Main'
import Calendar from './Calendar'

// This might need to be turned into a stateful component (aka container)
const App = () => (
  <div className='app'>
    <Calendar />
  </div>
)

export default App
