import React from 'react'
import { connect } from 'react-redux'
import '../styles/editprofile.css'


class EditProfile extends React.Component {
    render() {
        return(
            <div>
             <section className='edit_parent'>
              <span>Display Name </span>
              <input type='text' placeholder='Display Name'/>
              <br/>
              <span>Date of Birth </span>
              <input type='text' placeholder='mm/dd/yyyy'/>
              <br/>
              

             </section>
            </div>
        )
    }
}

export default EditProfile;