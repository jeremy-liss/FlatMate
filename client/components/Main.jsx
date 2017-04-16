import React from 'react'

import ProfileBar from './ProfileBar'

const Main = () => (
  <div className="container">
    <ProfileBar />
    <div className="row">
      <div className='six columns'>
        <a href='#/shoppinglist'><img src='' alt='link to shopping list' /></a>
      </div>
      <div className='six columns'>
        <a href='#/calendar'><img src='' alt='link to calendar' /></a>
      </div>
    </div>
    <div className="row">
      <div className='six columns'>
        <a href='#/roster'><img src='' alt='link to roster' /></a>
      </div>
      <div className='six columns'>
        <a href='#/bills'><img src='' alt='link to bills' /></a>
      </div>
    </div>
    <a href='#/settings'>Settings</a>
  </div>
)

export default Main
