const passport = require('passport')

const users = require('./users')

function handleError (err, req, res, next) {
  if (err) {
    return res.status(403).json({
      message: 'Access to this resource was denied.',
      error: err.message
    })
  }
  next()
}


const facebookOptions = {
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  scope: ['email'],
  profileFields: ['id', 'emails', 'name']
}

function facebookVerify (accessToken, refreshToken, profile, done) {
  return users.getByFacebook(profile.id)
    .then(result => {
      if (result.length === 0) {
        // EITHER deny access OR add another user to the database.
        // In this case, we'll add them:
        const newUser = users.createFacebook(profile)
          .then(() => ({
            id: profile.id,
            username: profile.emails[0].value
          }))

        return done(null, newUser)
      }
      const user = result[0]
      done(null, {
        id: user.id,
        username: user.username
      })
    })
    .catch(err => {
      done(err, false, { message: "Couldn't check your credentials with the database." })
    })
}

module.exports = {
  facebookOptions,
  facebookVerify,
  handleError,
