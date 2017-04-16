
import React from 'react'

import ProfileBar from './ProfileBar'

const Main = () => (
  <div className="container">
    <ProfileBar />
    <div className="row">
      <div className='six columns'>
        <a href='#/shoppinglist'><img src='../../css/images/shoppingList.png' alt='link to shopping list' /></a>
      </div>
      <div className='six columns'>
        <a href='#/calendar'><img
        src='../../css/images/calendar11.png' alt='link to calendar'
        /></a>
      </div>
    </div>
    <div className="row">
      <div className='six columns'>
        <a href='#/roster'><img src='../../css/images/roster.png' alt='link to roster' /></a>
      </div>
      <div className='six columns'>
        <a href='#/bills'><img src='../../css/images/bills.png' alt='link to bills' /></a>
      </div>
    </div>
  </div>
)

export default Main
