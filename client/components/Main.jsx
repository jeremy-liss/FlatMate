import React from 'react'

import ProfileBar from './ProfileBar'

const Main = () => (
  <div className="container">
    <ProfileBar />
    <div className="row">
      <div className='six columns'>
        <img src='' alt='link to shopping list' />
      </div>
      <div className='six columns'>
        <img src='' alt='link to calendar' />
      </div>
    </div>
    <div className="row">
      <div className='six columns'>
        <img src='' alt='link to roster' />
      </div>
      <div className='six columns'>
        <img src='' alt='link to bills' />
      </div>
    </div>
  </div>
)

export default Main
