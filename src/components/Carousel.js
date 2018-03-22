import React, { Component } from 'react'

import Carousel from 'nuka-carousel'

export default class ImageCarousel extends Component {
    render() {
        return(
        
            <Carousel
            // autoPlayInterval={200}
            >
              <img src="https://images.unsplash.com/photo-1466583985723-b74122659346?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e724125680bfb53dd83858d1435ddd2c&auto=format&fit=crop&w=1189&q=80" alt='img1'/>
              <img src="https://images.unsplash.com/photo-1503685374561-caac80ea1399?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1192ba206152bc70c23bf29a9ba62157&auto=format&fit=crop&w=1033&q=80" alt='img2'/>
              <img src="https://images.unsplash.com/photo-1510575199580-aa123b6cd05d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89e5e9ac47ba8d1427f84ccc11a99d69&auto=format&fit=crop&w=1052&q=80" alt='img3'/>
              <img src="https://images.unsplash.com/photo-1509291985095-788b32582a81?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3df807fb97311a00d38399243f18a4ab&auto=format&fit=crop&w=634&q=80" alt="img4"/>
              <img src="https://images.unsplash.com/photo-1502078534399-8190479363f5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=69b237681a9cd88a3b6b5d42f486c6c0&auto=format&fit=crop&w=1053&q=80" alt="img5"/>
              <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=954560871844da528c60343dc344ccbf&auto=format&fit=crop&w=1050&q=80" alt="img6"/>
              <img src="https://images.unsplash.com/photo-1504334054721-06ceb201ee88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=674b2ca8119b7bd0041e338d6744b2a6&auto=format&fit=crop&w=967&q=80" alt="img7"/>
              <img src="https://images.unsplash.com/photo-1506287375451-bb850eba44d0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=162af6b1badbe6c88475f5b45186502b&auto=format&fit=crop&w=675&q=80" alt="img8"/>
              <img src="https://images.unsplash.com/photo-1486421728445-c460298b20b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e3ce20ed379dc88b1092745ce38b6357&auto=format&fit=crop&w=1050&q=80" alt="img9"/>
              <img src="https://images.unsplash.com/photo-1503682464640-6173ea830f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d0a5f554339be1c57991ee2afc6cb8cb&auto=format&fit=crop&w=634&q=80" alt="img10"/>
            </Carousel>
            
        )
    }
}