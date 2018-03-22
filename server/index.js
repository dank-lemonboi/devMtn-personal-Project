require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0'),
      massive = require('massive'),
      bodyParser = require('body-parser'),
      checkForSession = require('./middlewares/checkForSession'),
      cors = require('cors')

      const app = express();
      app.use(express.static(  `${__dirname}/../build`  ));
      
      const {
          SERVER_PORT,
          CONNECTION_STRING,
          SESSION_SECRET,
          DOMAIN,
          CLIENT_ID,
          CLIENT_SECRET,
          CALLBACK_URL,
          REACT_APP_LOGOUT
        } = process.env
        
app.use(bodyParser.json());
app.use(cors());

// app.use(checkForSession);


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
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db')
    db.find_user([profile.id]).then( user => {
        if(!user[0]) {
            db.create_new_user(profile.displayName, profile.picture, profile.id).then( newUser => {
                done(null, newUser[0].user_id)
            } ) 
            } else {
                done(null, user[0].user_id)
            }
        })
    }
))

passport.serializeUser( ( user_id, done ) => {
    done( null, user_id )
})

passport.deserializeUser( ( user_id, done ) => {
    app.get('db').find_session_user_id([user_id]).then( user => {
        done( null, user[0])
    })
    
})


app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.REACT_APP_SUCCESS,
    failureRedirect: process.env.REACT_APP_FAILURE
}))



app.get('/auth/me', ( req, res ) => {
    // console.log(req.user)
    if(req.user) {
    res.status(200).send(req.user)
    } else {
        res.status(401).send('Nice try...')
    }
})



app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect(200, REACT_APP_LOGOUT)
})



// --------------------- Event EndPoints ----------------------

app.get('/events/getEvents', ( req, res ) => {
    // console.log(req.events)
    const db = app.get('db')
    db.get_events().then( events => {
      res.status(200).send(events)
    })
})

app.post('/api/events/createEvent', (req, res) => {
    console.log(req.body)
    // req.user.user_id, req.user.user_name, 

    const {
        userId,
        userName,
        eventName,
        eventCity,
        eventZip,
        eventAddress,
        eventImage,
        eventBookId,
        eventDescription
          } = req.body

    const db = app.get('db')
        db.create_event([userId, userName, eventName, eventCity, eventZip, eventAddress, eventImage, eventBookId, eventDescription]).then( () => {
        res.status(200).send()
        })
    })

    app.delete('/api/events/deleteEvent', (req, res) => {
        const db = app.get('db')
        console.log(req.body.user_id)
        db.delete_event([req.body.user_id]).then( () => {
            res.status(200).send()
        })
    })


app.listen( SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}...`));