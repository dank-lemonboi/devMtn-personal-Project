import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'


export default class Unauthorized extends Component {

    render() {
    return (
        <div>
          <div className='unauthorized' style={ {marginLeft: '47%', marginTop: '10%'} }>
          <Icon name='ban' size='massive' />
          </div>
          <div style={ {marginLeft: '34%', marginTop: '1%' } }>
          <h1>Unauthorized. Please Login to Continue</h1>
          </div>
        </div>
    )
 }
}