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
          SESSION_SECRET
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




app.listen( SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}...`));