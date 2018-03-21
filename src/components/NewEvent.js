import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/dashboard.css'
import axios from 'axios'

import { getEvents, inputName, inputCity, inputZip, inputAddress, inputUrl, inputBookID, inputDescription} from '../ducks/events'

class NewEvent extends Component {
    constructor(props) {
        super(props)

        

        this.postInputs = this.postInputs.bind(this)
    }
    


    postInputs() {
        const {
            user,
            eventName,
            eventCity,
            eventZip,
            eventAddress,
            eventImage,
            eventBookId,
            eventDescription
        } = this.props
console.log(this.props)
            axios.post('http://localhost:3030/api/events/createEvent', { userId: user.user_id, userName: user.user_name, eventName, eventCity, eventZip, eventAddress, eventImage, eventBookId, eventDescription }).then( () => {
           
            // console.log('has posted')
            this.props.toggleModal()
            this.props.getEvents()
         }
        )

        this.refs.eventName.value = ''
        this.refs.eventCity.value = ''
        this.refs.eventZip.value = ''
        this.refs.eventAddress.value = ''
        this.refs.eventImage.value = ''
        this.refs.eventBookId.value = ''
        this.refs.eventDescription.value = ''

    }
    render() {

        const {
            inputName,
            inputCity,
            inputZip,
            inputAddress,
            inputUrl,
            inputBookID,
            inputDescription
            } = this.props

        return(
            <div>
            <section className='event_inputs'>
            Event Name:
              <input className='e_name'
                     onChange={ e => inputName(e.target.value)}
                     ref = 'eventName'
                     />
            City:
              <input className='e_city' 
                     onChange={ e => inputCity(e.target.value)}
                     ref = 'eventCity'
                     />
            Zip:
              <input className='e_zip' 
                     onChange={ e => inputZip(e.target.value)}
                     ref = 'eventZip'
                     />
            Address:
              <input className='e_address' 
                     onChange={ e => inputAddress(e.target.value)}
                     ref = 'eventAddress'
                     />
            Image URL:
              <input className='e_url' 
                     onChange={ e => inputUrl(e.target.value)}
                     ref = 'eventImage'
                     />
            Book ID:
              <input className='e_book_id' 
                     onChange={ e => inputBookID(e.target.value)}
                     ref = 'eventBookId'
                     />
            Description:
              <textarea
                     onChange={ e => inputDescription(e.target.value)}
                     ref = 'eventDescription'
                     />

              <div className='create_button' onClick={this.postInputs}>Create new Event</div>
            </section>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
      user: state.userReducer.user,
      events: state.eventReducer.events,
      eventName: state.eventReducer.eventName,
      eventCity: state.eventReducer.eventCity,
      eventZip: state.eventReducer.eventZip,
      eventAddress: state.eventReducer.eventAddress,
      eventImage: state.eventReducer.eventImage,
      eventBookId: state.eventReducer.eventBookId,
      eventDescription: state.eventReducer.eventDescription
    }
}

export default connect(mapStateToProps, { getEvents, inputName, inputCity, inputZip, inputAddress, inputUrl, inputBookID, inputDescription } )(NewEvent)