import React from 'react'

const Register = () => (
  <div className='container'>
    <div className='row'>
      Sign Up!
      <form action='#' method='get' id='register'>
        <input type="text" placeholder="User Name" name='name'/><br />
        <input type="text" placeholder="Email" name='email'/><br />
        <input type="text" placeholder="Password" name='password'/><br />
        <input type="text" placeholder="Confirm Password" name='password-confirm'/><br />
        <button type='submit' form='register' value='Submit'>Register</button>
      </form>
    </div>
    <a href='/'>Return</a>
  </div>
)

export default Register
