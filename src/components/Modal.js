import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import NewEvent from './NewEvent'

const ModalModalExample = (props) => (

  <Modal open={props.open} trigger={<Button onClick={props.toggleModal}>Host an event!</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content>

       <NewEvent
       toggleModal={props.toggleModal}
       />
     
    </Modal.Content>
  </Modal>
)

export default ModalModalExample
