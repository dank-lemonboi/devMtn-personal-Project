require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0'),
      massive = require('massive'),
      bodyParser = require('body-parser')

      const {
          SERVER_PORT,
          CONNECTION_STRING,
          SESSION_SECRET,
          DOMAIN,
          CLIENT_ID,
          CLIENT_SECRET,
          CALLBACK_URL
      } = process.env

const app = express();
app.use(bodyParser.json());

massive(CONNECTION_STRING).then( (db) => {
    app.set('db', db)
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 20000
    }
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID:CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'open profile'
}, function(accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db')

    done(null, profile)
}))

passport.serializeUser( ( profile, done ) => {
    done( null, profile )
})

passport.deserializeUser( ( profile, done ) => {
    done( null, profile )
})


app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/userdashboard',
    failureRedirect: 'http://localhost:3000/'
}))


app.listen( SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}...`));