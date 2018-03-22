import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './components/Home'
import UserDashboard from './components/UserDashboard'
import EventDetails from './components/EventDetails'
import SendMessage from './components/SendMessage'
import EditProfile from './components/EditProfile'

import Unauthorized from './components/Unauthorized.js'

export default function Routes (props) {
    
    return (

    <Switch>
     <Route path='/' component={Home} exact/>
     <Route path='/userdashboard' component={UserDashboard} />
     <Route path='/editprofile' component={EditProfile} />
     <Route path='/eventdetails' component={EventDetails} />
     <Route path='/sendmessage' component={SendMessage} />
    </Switch>

    )
}