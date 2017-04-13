import React from 'react'

const DefaultPage = () => (
  <div className='container'>
    <div className='row'>
      <div className='info-box'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In in tellus viverra, mattis diam ac, ornare augue. Ut fermentum et dolor non volutpat.
        Proin commodo, nunc eu ullamcorper congue, velit elit tempus mauris,
        vitae aliquet mi mauris ut metus. Curabitur vehicula arcu et velit vulputate,
        ut gravida massa finibus. Vestibulum elementum urna id neque sodales, eu volutpat
        ipsum vestibulum. Sed id magna cursus, aliquet ante nec, suscipit augue.
        Pellentesque vulputate est metus, et ornare ligula faucibus ac.
      </div>
    </div>
    <div className='row'>
      <div className='four columns'>
        <div className='logins'>
          <div id='fb-login'>
            <p><a href='http://www.facebook.com/login'>
              <img src='https://cdn.fileplanet.com/gen//facebook-pro-app-100x100.png'></img>
            </a></p>
          </div>
        </div>
      </div>
      <div className='four columns'>
        <div id='login-box'>
          <form action='#/home' method='get' id='login'>
            <input type="text" placeholder="Email" name='email'/><br />
            <input type="text" placeholder="Password" name='password'/><br />
            <button type='submit' form='login' value='Submit'>Login</button>
          </form>
        </div>
      </div>
      <div className='four columns'>
        <div id='register-link'>
          <form action="#/register">
            <input type="submit" value="Register" />
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default DefaultPage
