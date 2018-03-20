import React, { Component } from 'react'
import '../styles/home.css'
import { connect } from 'react-redux'

import { getEvents } from '../ducks/events'

class Home extends Component {

    componentDidMount() {
        this.props.getEvents()
    }

    render() {
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
            <div className='home'>
            <p></p>
            <video className="home_image" loop autoPlay muted>
              <source src='http://mazwai.com/system/posts/videos/000/000/037/original/Black_Ink_--FREE_FOOTAGE--HD.mp4?1402249298' type='video/mp4'></source>
            </video>
            
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
      events: state.eventReducer.events
    }
}

export default connect(mapStateToProps, { getEvents } )(Home)