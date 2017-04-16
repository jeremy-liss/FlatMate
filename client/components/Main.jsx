import React from 'react'

import ProfileBar from './ProfileBar'

const Main = () => (
  <div className="container">

    <ProfileBar />

    <div className="row">
      <div className='six columns'>
        <div className='shoppingList'
            data-tilt data-tilt-scale="1.1">
          <a href='#/shoppinglist'><img src="./../css/images/shoppingList.png" alt='link to shopping list' />
          </a>

        </div>

      </div>

      <div className='six columns'>
        <div className='shoppingList'
            data-tilt data-tilt-scale="1.1">
          <a href='#/calendar'><img src='./../css/images/calendar.png' alt='link to calendar' />
          </a>

      </div>

    </div>

    <div className="row">
      <div className='six columns'>
        <div className='roster'
            data-tilt data-tilt-scale="1.1">
          <a href='#/roster'><img src='./../css/images/roster.png' alt='link to roster' />
          </a>

        </div>

      </div>

      <div className='six columns'>
        <div className='bills'
            data-tilt data-tilt-scale="1.1">
          <a href='#/bills'><img src='./../css/images/bills.png' alt='link to bills' />
          </a>

      </div>

    </div>

    <div>

    </div>

  </div>
)

export default Main
