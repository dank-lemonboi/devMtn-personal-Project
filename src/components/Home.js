import React, { Component } from 'react'
import '../styles/home.css'
import { connect } from 'react-redux'

import { getEvents } from '../ducks/events'

import ImageCarousel from './Carousel'


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
                <p>Hosted By: 
                <br />
                {event.event_host_name}
                </p>
                <p>{event.event_description}</p>
                </div>
            )
        })
        return(
            <div className='home'>
              
                <ImageCarousel 
                autoPlay={true}
                autoPlayInterval={3000}
                easing='easeInOutElastic'
                wrapAround = {true}
                />
              
            
              <section className='event_list'>
                {eventList}
              </section>

              <section home_footer>

              </section>
            
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

// <video className="home_image" loop autoPlay muted>
// <source src='http://mazwai.com/system/posts/videos/000/000/037/original/Black_Ink_--FREE_FOOTAGE--HD.mp4?1402249298' type='video/mp4'></source>
// </video>