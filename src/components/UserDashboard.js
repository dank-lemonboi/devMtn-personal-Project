import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/dashboard.css'

import { getEvents } from '../ducks/events'


class UserDashboard extends Component { 
    constructor() {
        super()
    }


    componentDidMount() {
        this.props.getEvents()
    }

    render() {
        // console.log(this.props.events)
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
              <input className='e_name'/>
            City:
              <input className='e_city' />
            Zip:
              <input className='e_zip' />
            Address:
              <input className='e_address' />
            Image URL:
              <input className='e_url' />
            Book ID:
              <input className='e_book_id' />
            Description:
              <input className='e_description' />
              <div className='create_button'>Create new Event</div>
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
      events: state.eventReducer.events
    }
}

export default connect(mapStateToProps, { getEvents } )(UserDashboard)