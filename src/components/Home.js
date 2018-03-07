import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Home extends Component {
    render() {
        return(
            <div className='home'>
            <Navbar />
            <div>Hello</div>
            <a href={process.env.REACT_APP_LOGIN}>
             <div id='auth_button'>Login/Register</div>
            </a>
            </div>
        )
    }
}