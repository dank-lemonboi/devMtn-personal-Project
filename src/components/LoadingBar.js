import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoadingBar = () => (
  <div>

    <Segment>
      <Dimmer active inverted>
        <Loader inverted content='Loading' />
      </Dimmer>

      <Image src='/assets/images/wireframe/short-paragraph.png' />
    </Segment>

  </div>
)

export default LoadingBar