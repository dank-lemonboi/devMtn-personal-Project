import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getUser } from '../ducks/users'
import '../styles/buttons.css'
import '../styles/navbar.css'

class Navbar extends Component {
    constructor() {
        super();
        this.logout = this.logout.bind(this)
    }



    componentDidMount() {
        this.props.getUser()
        // console.log(this.props.user)
    }

    logout() {
        if(!this.props.user.user_name) {
            window.location.href = process.env.REACT_APP_LOGIN
        } else {
        axios.get('/auth/logout').then( res => {
            // HashRouter can't deal with external URL's so we can reassign the URL with the window object and assign it the value
            // of the location which is found in the response header.
            window.location.href = res.headers.location
        } )
     }
    }


    render() {
        // console.log(this.props)
        const { user } = this.props
        return(
            <div className='navbar_parent'>
            NavBar
            <div>
              <div className='login_toggle' onClick={ this.logout }>
                {
                 (user.user_name) 
                 ?
                 <div>
                 <img className='user_avatar' src={user.user_image} alt="image"/>
                 {user.user_name}
                 </div>
                 : 
                 'Login'
                }
              </div>
            </div>
            
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        user: state.user
    }
 }
 
 export default connect(mapStateToProps, { getUser } )(Navbar)