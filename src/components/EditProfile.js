import React from 'react'
import { connect } from 'react-redux'
import '../styles/editprofile.css'


class EditProfile extends React.Component {
    render() {
        return(
            <div className='edit_container'>
            <section className='header_container'>
            <h1>Make changes to Your profile Here</h1>
            </section>
             <section className='edit_parent'>
              <span>Display Name: </span>
              <input type='text' placeholder='Display Name'/>
              <br/>
              <span>Date of Birth: </span>
              <input type='date' placeholder='mm/dd/yyyy'/>
              <br/>
              <span>Phone #: </span>
              <input type='tel' placeholder='(###) ###-####'/>
              <br/>
              <button>Submit</button>
             </section>
            </div>
        )
    }
}

export default EditProfile;