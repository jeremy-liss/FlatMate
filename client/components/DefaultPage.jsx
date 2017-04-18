import React from 'react'
import { Link } from 'react-router-dom'

const DefaultPage = () => (
  <div className='container'>
    <div className='defaultPage'>
      <div className='row'>
        <div className='info-box'>
          <h1>Welcome Flattie</h1>
          <p><strong>What is Flat Mate?</strong><br />
            It's your way to organise all your flat communication woes in one place.<br />
            Whether it's splitting bills, creating Flat events or making sure everyone knows what duties they're on.<br />
            We've got you covered.
          </p>
          <p><strong>Sign In / Sign Up!</strong></p>
        </div>
      </div>
      <div className='row'>
        <div className='twelve columns'>
          <div id='login-box'>
            <form action='#/home' id='login'>
              <input type="text" placeholder="Email" name='email'/><br />
              <input type="password" placeholder="Password" name='password'/><br />
              <button type='submit' form='login'>Login</button>
            </form>
            <form action="#/register">
              <input type="submit" value="Register" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default DefaultPage
