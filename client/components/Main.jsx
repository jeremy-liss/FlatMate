
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
        <div id='roster'>
        <a href='#/roster'><img id='rosterImage' src='../../css/images/Roster123.png' alt='link to roster' width='200px' height='200px' /></a>
        </div>
      </div>
      <div className='six columns'>
        <div id='bills' >
          <a href='#/bills'><img src='../../css/images/bills111.png' alt='link to bills'/></a>
        </div>
      </div>
    </div>
  </div>
)

export default Main
