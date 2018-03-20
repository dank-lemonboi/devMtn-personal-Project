import React, { Component } from 'react'

class NewEvent extends Component {
    render() {
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