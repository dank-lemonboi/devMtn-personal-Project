import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/dashboard.css'
import axios from 'axios'

import { getEvents, inputName, inputCity, inputZip, inputAddress, inputUrl, inputBookID, inputDescription} from '../ducks/events'


class UserDashboard extends Component { 
    constructor() {
        super()

        this.postInputs = this.postInputs.bind(this)
    }
  
    componentDidMount() {
        this.props.getEvents()
    }

    postInputs() {
        const {
            eventName,
            eventCity,
            eventZip,
            eventAddress,
            eventImage,
            eventBookId,
            eventDescription
        } = this.props

        axios.post('http://locahost:3030/api/events/createEvent', { eventName, eventCity, eventZip, eventAddress, eventImage, eventBookId, eventDescription }).then( () => {
            console.log('has posted')
         }
        )
    }

    render() {
        console.log(this.props)

        const {
               inputName,
               inputCity,
               inputZip,
               inputAddress,
               inputUrl,
               inputBookID,
               inputDescription
               } = this.props

       const eventList = this.props.events.map( (event, i) => {
            return ( 
                <div key={i} className='events_container'>
               { (event.image) ? <img className='book_image' src={event.image} /> : null}
                <p>{event.event_name}</p>
                <p>{event.event_host}</p>
                <p>{event.event_description}</p>
                <button>Edit</button>
                </div>
            )
        })
        return(
            <div className='dashboard_parent'>
            UserDashboard 
            <input 
            className='search_input' 
            type='text' placeholder='Search'
          //   value={ }
          //   onKeyPress={  }
          />

            <section className='event_inputs'>
            Event Name:
              <input className='e_name'
                     onChange={ e => inputName(e.target.value)}
                     value={this.props.eventName}
                     />
            City:
              <input className='e_city' 
                     onChange={ e => inputCity(e.target.value)}/>
            Zip:
              <input className='e_zip' 
                     onChange={ e => inputZip(e.target.value)}/>
            Address:
              <input className='e_address' 
                     onChange={ e => inputAddress(e.target.value)}/>
            Image URL:
              <input className='e_url' 
                     onChange={ e => inputUrl(e.target.value)}/>
            Book ID:
              <input className='e_book_id' 
                     onChange={ e => inputBookID(e.target.value)}/>
            Description:
              <input className='e_description' 
                     onChange={ e => inputDescription(e.target.value)}/>

              <div className='create_button' onClick={this.postInputs()}>Create new Event</div>
            </section>

          <div className='event_list'>
           {eventList}
          </div>
         
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
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

export default connect(mapStateToProps, { getEvents, inputName, inputCity, inputZip, inputAddress, inputUrl, inputBookID, inputDescription } )(UserDashboard)