import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/dashboard.css'
import axios from 'axios'

import Modal from './Modal.js'

import { getEvents, inputName, inputCity, inputZip, inputAddress, inputUrl, inputBookID, inputDescription} from '../ducks/events'


class UserDashboard extends Component { 
    constructor() {
        super()

        this.state = {
            id: 0,
            open: false
        }

        this.deleteEvent = this.deleteEvent.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        this.findBookList = this.findBookList.bind(this)
    }
  
    componentDidMount() {
        this.props.getEvents()
    }

    deleteEvent(i) {
        console.log(i)
        axios.delete('/api/events/deleteEvent', {data: {user_id: i} } ).then( () => {
            console.log('Event Deleted')
            this.props.getEvents()
        })
    }

   toggleModal() {
        this.setState({open: !this.state.open})
    }

    // findBookList() {
    //     const {
    //         GOODREADS_API_KEY,
    //         GOODREADS_API_SECRET
    //     } = process.env

    //     axios.get('https://www.goodreads.com/search.xml?key=eS3lZHvaNUnZDWtQmHydBA&q=Ender%27s+Game').then( res => {
    //         console.log(res)
    //     });
    // }

    render() {
        // console.log(this.props)
        
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
                <div key={event.event_id} className='events_container'>
                  { (event.image) ? <img className='book_image' src={event.image} /> : null}
                  <p>{ (this.state.id !== event.event_id) ? event.event_name : <input value={event.event_name}/> }</p>
                  <p>{event.event_host_name}</p>
                  <p>{event.event_description}</p>
                    <div>
                      <button className='create_button' onClick={ () => this.setState({id: (this.state.id ? 0 : event.event_id)})}>Edit</button>
                      <div className='create_button' onClick={ () => this.deleteEvent(event.event_id)}>Delete</div>
                    </div>
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

          <Modal
            toggleModal={this.toggleModal}
            open={this.state.open}
          />

          
          <div className='event_list'>
           {eventList}
          </div>

          {/* <button onClick={this.findBookList}>Get books</button> */}
         
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

export default connect(mapStateToProps, { getEvents, inputName, inputCity, inputZip, inputAddress, inputUrl, inputBookID, inputDescription } )(UserDashboard)