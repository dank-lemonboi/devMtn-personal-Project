import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getUser } from '../ducks/users'
import '../styles/buttons.css'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'


class Navbar extends Component {
    constructor() {
        super();

        this.state = {
            slideIn: false
        }

        this.logout = this.logout.bind(this)
        this.login = this.login.bind(this)
    }



    componentDidMount() {
        this.props.getUser()
        // console.log(this.props.user)
    }

    login() {
            window.location.href = process.env.REACT_APP_LOGIN
        
    }

    logout() {
        axios.get('/auth/logout').then( res => {
            // HashRouter can't deal with external URL's so we can reassign the URL with the window object and assign it the value
            // of the location which is found in the response header.
            window.location.href = res.headers.location
        } )
     }
    
    render() {
        console.log(user)
        const { user } = this.props
        return( 
            <div style = {{zIndex: 99}}>
            <div className='navbar_parent'>
            <i class="fas fa-book"></i>
            
              <div className='login_toggle' onClick={ !user.user_name ? this.login : null }>
                {

                 (user.user_name) 

                 ?

                 <div className='navbar_right'>

                  <div style={{boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)'}} className={this.state.slideIn ? 'dropdownMenu slideIn' : 'dropdownMenu'}>
                      <Link to='/editprofile'><div className='hvr-underline-from-center'>Account Settings</div></Link>
                      <Link to='/userdashboard'><div className='hvr-underline-from-center'>Dashboard</div></Link>
                      <div className='hvr-underline-from-center'>Invite Friends</div>
                      <div className='hvr-underline-from-center'>Help</div>
                      <p className='line_break' style={{marginBottom: 0}}></p>
                      <div id='logout' onClick={this.logout} className='hvr-underline-from-center'>Logout</div>
                      <br/>
                  </div>
                  
                   <div className='avatar_container' onClick={ () => this.setState({ slideIn: !this.state.slideIn })}>
                   <img className='user_avatar' src={user.user_image} alt="image"/>

                   {user.user_name } 
                   <i class="fas fa-angle-down"></i>

                   </div>
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
        user: state.userReducer.user
    }
 }
 
 export default connect(mapStateToProps, { getUser } )(Navbar)