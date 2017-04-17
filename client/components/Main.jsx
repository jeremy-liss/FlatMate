import React from 'react'
import { Link } from 'react-router-dom'
import ProfileBar from './ProfileBar'

const Main = () => (
  <div className="container">
    <ProfileBar />
    <div className="row">
      <div className='six columns'>
        <Link to='/shoppinglist'><img src='' alt='link to shopping list' /></Link>
      </div>
      <div className='six columns'>
        <Link to='/calendar'><img src='' alt='link to calendar' /></Link>
      </div>
    </div>
    <div className="row">
      <div className='six columns'>
        <Link to='/roster'><img src='' alt='link to roster' /></Link>
      </div>
      <div className='six columns'>
        <Link to='/bills'><img src='' alt='link to bills' /></Link>
      </div>
    </div>
    <a href='#/settings'>Settings</a>
  </div>
)

export default Main
