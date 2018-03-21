import React, { Component } from 'react';
import './App.css';
import Routes from './routes'
import { HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import axios from 'axios'



class App extends Component {
  constructor(){
    super()

    this.state = {
      auth: undefined
    }
  }

  componentDidMount() {

    axios.get('/auth/me').then( res => {
      (res.data.user) ? this.setState({auth: true}) : this.setState({auth: false})
    })
  }

  render() {
    return (
      <HashRouter> 
      <div className="App">
       <Navbar />    
       <Routes
       auth={this.state.auth}
       />
       </div>
       </HashRouter>     
    );
  }
}

export default App;
