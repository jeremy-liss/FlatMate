import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import {postUser} from '../actions'

const Register = () => (
  <div className='registerContainer'>
    <div className='row'>
      Sign Up!
      <form onSubmit={confirmPassword} id='register'>
        <input type="text" placeholder="User Name" /><br />
        <input type="text" placeholder="Email" /><br />
        <input type="password" placeholder="Password" /><br />
        <input type="password" placeholder="Confirm Password" /><br />
        <button type='submit' form='register' value='Submit'>Register</button>
      </form>
    </div>
    <a href='/'>Return</a>
  </div>
)

function confirmPassword (ev) {
  ev.preventDefault(ev)
    if (ev.target.elements[0].value === '' ||
        ev.target.elements[1].value === '' ||
        ev.target.elements[2].value === '') {
          return alert('Please enter all fields')
        }
    if (ev.target.elements[2].value === ev.target.elements[3].value) {
    var userObject = {name: ev.target.elements[0].value,
           email: ev.target.elements[1].value,
           hash: ev.target.elements[2].value,
           flat_id: null}
    postUser(userObject)
  } else alert('Passwords do not match!')
}

export default Register
