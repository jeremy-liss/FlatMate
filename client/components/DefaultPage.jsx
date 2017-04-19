import React from 'react'
import { Link } from 'react-router-dom'

const DefaultPage = () => (
  <div className='container'>
    <div className='defaultPage'>
      <div className='row'>
        <div className='info-box'>
          <h1>Welcome Flattie</h1>
          <h4><strong>What is FlatMate?</strong><br /></h4>
          <p> It's your way to organise all your flat communication woes in one place.<br></br>
            Whether it's splitting bills, creating Flat events or making sure<br></br> everyone knows what duties they're on.<br></br>
            We've got you covered.<br></br>

          <strong>Sign In / Sign Up!</strong> </p>
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
      <div id="polaroid1">
          <img src='../../css/images/polaroid4.png' alt='link to shopping list' width='230px' height='250px'/>
      </div>
      <div id="post-note">
        <img src='../../css/images/postit.png' alt='link to shopping list' width='230px' height='250px'/>
      </div>
    </div>
  </div>
)

export default DefaultPage
