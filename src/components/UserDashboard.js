import React, { Component } from 'react'
import Navbar from './Navbar'


class UserDashboard extends Component { 
    render() {
        console.log(this.props)
        return(
            <div>
            <Navbar />
            UserDashboard
            </div>
        )
    }
}

export default UserDashboard