import React from 'react'

const DefaultPage = () => (
  <div className='defaultPage'>
    <div className='info-box'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      In in tellus viverra, mattis diam ac, ornare augue. Ut fermentum et dolor non volutpat.
      Proin commodo, nunc eu ullamcorper congue, velit elit tempus mauris,
      vitae aliquet mi mauris ut metus. Curabitur vehicula arcu et velit vulputate,
      ut gravida massa finibus. Vestibulum elementum urna id neque sodales, eu volutpat
      ipsum vestibulum. Sed id magna cursus, aliquet ante nec, suscipit augue.
      Pellentesque vulputate est metus, et ornare ligula faucibus ac.</div>
    <div className='logins'>
      <div id='fb-login'>
        <p><a href='http://www.facebook.com/login'>
          <img src='https://www.peacerun.org/static/media/uploads/global/frontpageimages/facebook.png'></img>
        </a></p>
      </div>
      <div id='login-box'>
        <form action='#' method='get' id='login'>
          <input type="text" placeholder="Email" name='email'/><br />
          <input type="text" placeholder="Password" name='password'/><br />
          <button type='submit' form='login' value='Submit'>Login</button>
        </form>
      </div>
      <div id='register-link'>
        <form action="https://en-gb.facebook.com/login/">
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  </div>
)

export default DefaultPage
